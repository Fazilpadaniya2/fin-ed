import { useTopics } from "../../context/TopicsContext.jsx";
import TopicCard from "../ui/topicCard.jsx";

export default function MainScreen() {
  const { topics, err, loading } = useTopics();

  if (loading) return <h1>Loading...</h1>;
  if (err) return <h1>{err}</h1>;
  if (!topics?.length) return <p>No topics yet.</p>;

  return (
    <div className="px-4 py-2">
      <h2 className="text-xl font-semibold mb-4">Select a course</h2>
      <div className="flex flex-col">
        {topics.map((t) => (
          <TopicCard
            key={t.topic_id}
            topic_id={t.topic_id}
            name={t.slug}
            position={t.topic_position}
            totalScenes={t.total_scenes}
            status={t.is_active}
          />
        ))}
      </div>
    </div>
  );
}
