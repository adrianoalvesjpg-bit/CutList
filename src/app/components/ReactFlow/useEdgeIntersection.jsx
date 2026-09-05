import { useCallback, useRef } from 'react';
import { useReactFlow } from '@xyflow/react';

export default function useEdgeIntersection({ enabled = true } = {}) {
  const { updateEdge, getEdge, addEdges } = useReactFlow();
  const overlappedEdgeRef = useRef(null);
  const onNodeDrag = useCallback(
    (event, node) => {
      if (!enabled) return;

      const nodeDiv = document.querySelector(
        `.react-flow__node[data-id="${node.id}"]`,
      );
      if (!nodeDiv) return;

      const rect = nodeDiv.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const edgeFound = document
        .elementsFromPoint(centerX, centerY)
        .find((el) => el.classList.contains('react-flow__edge-interaction'))
        ?.parentElement;

      const edgeId = edgeFound?.dataset.id;

      if (edgeId) updateEdge(edgeId, { style: { opacity: '0.4' } });
      else if (overlappedEdgeRef.current)
        updateEdge(overlappedEdgeRef.current, { style: {} });

      overlappedEdgeRef.current = edgeId || null;
    },
    [updateEdge, enabled],
    
  );

  const onNodeDragStop = useCallback(
    (event, node) => {
      const edgeId = overlappedEdgeRef.current;
      if (!edgeId) return;
      const edge = getEdge(edgeId);
      if (!edge) return;

      updateEdge(edgeId, { source: edge.source, target: node.id, style: {} });

      addEdges({
        id: `${node.id}->${edge.target}`,
        source: node.id,
        target: edge.target,
      });

      overlappedEdgeRef.current = null;
    },
    [getEdge, addEdges, updateEdge],
  );

  
  return { onNodeDrag, onNodeDragStop };
}