"use client";

import { ArchNode } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NodeDetailProps {
  node: ArchNode;
  onClose: () => void;
}

export default function NodeDetail({ node, onClose }: NodeDetailProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <Card className="w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <CardHeader className="flex flex-row items-start justify-between pb-3">
          <div>
            <CardTitle className="text-lg">{node.label}</CardTitle>
            <p className="text-xs text-muted-foreground capitalize mt-1">{node.type}</p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            ✕
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold mb-1">Description</h4>
            <p className="text-sm text-muted-foreground">{node.description}</p>
          </div>

          {node.tech && node.tech.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {node.tech.map((tech) => (
                  <span key={tech} className="text-xs bg-muted px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
