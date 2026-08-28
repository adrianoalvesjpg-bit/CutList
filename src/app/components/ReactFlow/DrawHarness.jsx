import { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
  Position,
  Controls,
  Background,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';


import StDrawHarness from '../../style/ReactFlow/DrawHarness.module.css'
import { div } from 'motion/react-client';

// --- CUSTOM NODE ---
// É só um componente React normal. `data` vem do objeto do node.
function TaskNode({ data }) {
  return (
    <div style={{
      padding: '10px 15px',
      borderRadius: 8,
      border: '2px solid #6366f1',
      background: '#fff',
      minWidth: 150,
    }}>
      {/* Handle = ponto de conexão. "target" recebe edges, "source" cria edges */}
      <Handle type="target" position={Position.Left} />
      
      <strong>{data.label}</strong>
      <p style={{ margin: 0, fontSize: 12, color: '#666' }}>{data.status}</p>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}

// Registra o tipo custom pra usar no array de nodes
const nodeTypes = { task: TaskNode };

const initialNodes = [
  { id: '1', type: 'task', position: { x: 0, y: 0 }, data: { label: 'Planejar', status: 'Feito' } },
  { id: '2', type: 'task', position: { x: 300, y: 0 }, data: { label: 'Executar', status: 'Em andamento' } },
  { id: '3', type: 'task', position: { x: 300, y: 150 }, data: { label: 'Revisar', status: 'Pendente' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // onConnect dispara quando o usuário arrasta de um handle pra outro.
  // useCallback aqui é só otimização (evita recriar a função a cada render) —
  // não é obrigatório pro código funcionar, mas é padrão comum em exemplos React Flow.
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className={StDrawHarness.main}>
      <div className={StDrawHarness.canva}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          proOptions={{ hideAttribution: true }}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

export default Flow;