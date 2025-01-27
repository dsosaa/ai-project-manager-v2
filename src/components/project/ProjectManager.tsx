import React, { useState } from "react";
import Button from "../ui/Button";
import { AIService } from "@/services/AIService";

export default function ProjectManager() {
  const [ideas, setIdeas] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateIdeas = async () => {
    setLoading(true);
    try {
      const newIdeas = await AIService.generateIdeas("project management");
      setIdeas(newIdeas);
    } catch (error) {
      console.error("Error generating ideas:", error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Project Ideas</h2>
      <Button onClick={generateIdeas}>
        {loading ? "Generating..." : "Generate Ideas"}
      </Button>
      {ideas.length > 0 && (
        <ul className="mt-4 space-y-2">
          {ideas.map((idea, index) => (
            <li key={index} className="p-2 bg-gray-50 rounded">
              {idea}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
