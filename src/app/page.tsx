import Layout from "@/components/layout/Layout";
import MindMap from "@/components/mindmap/MindMap";
import KnowledgeGraph from "@/components/knowledge/KnowledgeGraph";
import ProjectManager from "@/components/project/ProjectManager";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        <ProjectManager />
        <MindMap />
        <KnowledgeGraph />
      </div>
    </Layout>
  );
}
