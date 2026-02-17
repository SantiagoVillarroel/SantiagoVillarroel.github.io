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

const nodeTypeColors: Record<string, string> = {
  frontend: "bg-blue-50 border-blue-300",
  backend: "bg-purple-50 border-purple-300",
  database: "bg-green-50 border-green-300",
  api: "bg-orange-50 border-orange-300",
  worker: "bg-yellow-50 border-yellow-300",
  service: "bg-red-50 border-red-300",
  storage: "bg-indigo-50 border-indigo-300",
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
    style: {
      padding: "16px",
      borderRadius: "8px",
      border: "2px solid",
      cursor: "pointer",
      fontSize: "12px",
      fontWeight: "500",
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
            const colorClass = projectNode ? nodeTypeColors[projectNode.type] : "bg-gray-50";
            return {
              ...node,
              style: {
                ...node.style,
                padding: "16px",
                borderRadius: "8px",
                border: "2px solid",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "500",
                minWidth: "120px",
                textAlign: "center",
                backgroundColor: colorClass.split(" ")[0],
                borderColor: colorClass.split(" ")[1],
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
