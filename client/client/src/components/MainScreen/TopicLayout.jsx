import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../lib/api.js";
import SceneButton from "../ui/SceneButton.jsx";

export default function Topics() {
  const [scenes, setScenes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const { topicid } = useParams();

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/topics/${topicid}/scenes`);
        if (alive) setScenes(data?.data ?? []);
      } catch (e) {
        if (alive) setErr(e.message ?? "Failed to load scenes");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, [topicid]);

  if (loading) return <h1>Loading…</h1>;
  if (err) return <h1>{err}</h1>;

  return (
    <>
      {/* The wrapper below MUST live in a center column that has w-0 flex-1 min-w-0 */}
      <section className="w-full min-w-0 max-w-full px-2">
        {/* Scroll container is width-limited by the center column */}
        <div
          className="w-full min-w-0 max-w-full
                     overflow-x-auto overflow-y-hidden
                     scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800
                     snap-x snap-mandatory"
          role="region"
          aria-label="Scenes list"
        >
          {/* Inner row can be wider than viewport without growing the page */}
          <div className="inline-flex gap-4 w-max">
            {scenes.map((s) => (
              <div key={s.scene_id} className="shrink-0 snap-start">
                <SceneButton
                  scene_id={s.scene_id}
                  topicId={s.topic_id}
                  number={s.number}
                  title={s.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Outlet />
    </>
  );
}
