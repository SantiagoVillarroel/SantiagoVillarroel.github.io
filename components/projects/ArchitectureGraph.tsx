"use client";

import { useState, useCallback } from "react";
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";
import { ArchitectureGraph as ArchGraphData } from "@/lib/projects";
import NodeDetail from "./NodeDetail";

interface ArchitectureGraphProps {
  data: ArchGraphData;
}

const nodeTypeStyles: Record<string, { background: string; border: string }> = {
  frontend: { background: "#eff6ff", border: "#93c5fd" }, // blue-50 / blue-300
  backend: { background: "#faf5ff", border: "#c084fc" }, // purple-50 / purple-300
  database: { background: "#ecfdf5", border: "#86efac" }, // green-50 / green-300
  api: { background: "#fff7ed", border: "#fdba74" }, // orange-50 / orange-300
  worker: { background: "#fffbeb", border: "#fcd34d" }, // yellow-50 / yellow-300
  service: { background: "#fef2f2", border: "#fca5a5" }, // red-50 / red-300
  storage: { background: "#eef2ff", border: "#a5b4fc" }, // indigo-50 / indigo-300
};

export default function ArchitectureGraph({ data }: ArchitectureGraphProps) {
  const [selectedNode, setSelectedNode] = useState<(typeof data.nodes)[0] | null>(null);

  // Convert project nodes to React Flow nodes with positioning
  const initialNodes: Node[] = data.nodes.map((node, idx) => ({
    id: node.id,
    data: {
      label: node.label,
      type: node.type,
      description: node.description,
    },
    position: {
      x: (idx % 3) * 250,
      y: Math.floor(idx / 3) * 200,
    },
    // Keep inline styles minimal so Tailwind classes can control visuals
    style: {
      cursor: "pointer",
    },
  }));

  // Convert project edges to React Flow edges
  const initialEdges: Edge[] = data.edges.map((edge) => ({
    id: edge.id,
    source: edge.source,
    target: edge.target,
    label: edge.label,
    markerEnd: { type: MarkerType.ArrowClosed },
    animated: true,
  }));

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick = useCallback(
    (_: any, node: Node) => {
      const projectNode = data.nodes.find((n) => n.id === node.id);
      if (projectNode) {
        setSelectedNode(projectNode);
      }
    },
    [data.nodes]
  );

  return (
    <>
      <div className="relative h-[500px] bg-white border rounded-lg overflow-hidden">
        <ReactFlow
          nodes={nodes.map((node) => {
            const projectNode = data.nodes.find((n) => n.id === node.id);
            const styleForType = projectNode ? nodeTypeStyles[projectNode.type] : { background: "#f8fafc", border: "#e2e8f0" };
            return {
              ...node,
              style: {
                ...node.style,
                minWidth: 120,
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 500,
                padding: 16,
                borderRadius: 8,
                textAlign: "center",
                backgroundColor: styleForType.background,
                border: `2px solid ${styleForType.border}`,
              },
            };
          })}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>

      {selectedNode && (
        <NodeDetail node={selectedNode} onClose={() => setSelectedNode(null)} />
      )}
    </>
  );
}
