import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import StDrawHarness from '../../style/ReactFlow/DrawHarness.module.css'
import DerivationNode from './DerivationNode'
import OutNode from './OutNode'
import TerminationNode from './TerminationNode'
import SpliceNode from './SpliceNode'
import DiodoNode from './DiodoNode'
import ResistorNode from './ResistorNode'
import FloatingEdge from './FloatingEdge'
import RightSide from './RightSide'

const nodeTypes = {
  derivation: DerivationNode,
  out: OutNode,
  termination: TerminationNode,
  splice: SpliceNode,
  diodo: DiodoNode,
  resistor: ResistorNode,
};

const edgeTypes = { floating: FloatingEdge };

const initialNodes = [];
const initialEdges = [];

function FlowInner({ addNodeHandlers, setNodeHandlers }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { screenToFlowPosition } = useReactFlow();
  const wrapperRef = useRef(null);

  const getViewportCenter = useCallback(() => {
    const bounds = wrapperRef.current.getBoundingClientRect();
    return screenToFlowPosition({
      x: bounds.x + bounds.width / 2,
      y: bounds.y + bounds.height / 2,
    });
  }, [screenToFlowPosition]);

  const snapToGrid = (pos) => ({
  x: Math.round(pos.x / GRID_SIZE) * GRID_SIZE,
  y: Math.round(pos.y / GRID_SIZE) * GRID_SIZE,
  });
  const GRID_SIZE=10;
  const addNode = useCallback((type, position, grid = true) => {
    
    setNodes((nodes) => {
      const id = (nodes.length + 1).toString();
      let customNodes = nodes.filter(node => node.type === type);

      let data = customNodes.length + 1;
      if (type === 'derivation') data = 'N' + data;

      if (type === 'termination') data = 'T' + data;

      if (type === 'splice') data = 'S' + data;

      if (type === 'diodo') data = 'D' + data;

      if (type === 'resistor') data = 'R' + data;

      let finalPosition = position ?? getViewportCenter();

      if (grid) {
        finalPosition = snapToGrid(finalPosition);
      }

      const newNode = {
        id,
        type,
        position: finalPosition,
        data,
      };
      return [...nodes, newNode];
    });
  }, [setNodes, getViewportCenter]);

  useEffect(() => {
    setNodeHandlers({
      out: () => addNode('out'),
      derivation: () => addNode('derivation'),
      termination: () => addNode('termination'),
      splice: () => addNode('splice'),
      diodo: () => addNode('diodo'),
      resistor: () => addNode('resistor'),
    });
  }, [addNode, setNodeHandlers]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );


  const [onGrid, setOnGrid] = useState(true);

  return (
    <div className={StDrawHarness.main}>
      <div className={StDrawHarness.canva} ref={wrapperRef}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          edgeTypes={edgeTypes}
          snapToGrid={onGrid}
          snapGrid={[10, 10]}
          minZoom={0.5}
          maxZoom={20}
          defaultEdgeOptions={{ type: 'floating' }}
          connectionLineType="straight"
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          proOptions={{ hideAttribution: true }}
          fitView
        >
          <Background 
          variant="dots"
          gap={10}
          size={0.5}
          offset={[2.8, 2.8]}
          />
          
          <Controls
          className={StDrawHarness.controls}
          position="bottom-right"      // top-left, top-right, bottom-left, bottom-right, top-center, bottom-center
          orientation="vertical"        // ou "horizontal"
          showZoom={true}
          showFitView={true}
          showInteractive={true}        // botão de lock/unlock (trava arrastar nodes)
        />
        </ReactFlow>
      </div>
          <RightSide OnGrid={onGrid} setOnGrid={setOnGrid} />

      
    </div>
  );
}

// Única função "Flow" do arquivo, e a única exportada
export default function Flow(props) {
  return (
    <ReactFlowProvider>
      <FlowInner {...props} />
    </ReactFlowProvider>
  );
}