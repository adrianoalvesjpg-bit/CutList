// FloatingEdge.jsx
import { BaseEdge, getStraightPath, useInternalNode } from '@xyflow/react';

const RADIUS = 3;

function getNodeCenter(node) {
  const { x, y } = node.internals.positionAbsolute;
  const width = node.measured?.width ?? 8;
  const height = node.measured?.height ?? 8;
  return { x: x + width / 2, y: y + height / 2 };
}

function getCircleIntersection(center, radius, target) {
  const angle = Math.atan2(target.y - center.y, target.x - center.x);
  return {
    x: center.x + radius * Math.cos(angle),
    y: center.y + radius * Math.sin(angle),
  };
}

export default function FloatingEdge({ id, source, target, markerEnd, style, interactionWidth }) {
  const sourceNode = useInternalNode(source);
  const targetNode = useInternalNode(target);

  if (!sourceNode || !targetNode) return null;

  const sourceCenter = getNodeCenter(sourceNode);
  const targetCenter = getNodeCenter(targetNode);

  const sourcePoint = getCircleIntersection(sourceCenter, RADIUS, targetCenter);
  const targetPoint = getCircleIntersection(targetCenter, RADIUS, sourceCenter);

  const [edgePath] = getStraightPath({
    sourceX: sourcePoint.x,
    sourceY: sourcePoint.y,
    targetX: targetPoint.x,
    targetY: targetPoint.y,
  });

  return (
    <BaseEdge
      id={id}
      path={edgePath}
      markerEnd={markerEnd}
      style={style}
      interactionWidth={interactionWidth}
    />
  );
}