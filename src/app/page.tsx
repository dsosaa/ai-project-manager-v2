import Layout from "@/components/layout/Layout";
import MindMap from "@/components/mindmap/MindMap";
import KnowledgeGraph from "@/components/knowledge/KnowledgeGraph";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        <MindMap />
        <KnowledgeGraph />
      </div>
    </Layout>
  );
}
