// src/components/ui/topicCard.jsx
import banking from '../../assets/images/banking.svg';
import creditCard from '../../assets/images/credit-card.svg';
import budgeting from '../../assets/images/budgeting.svg';
import { Link } from 'react-router-dom';
import api from '../../lib/api';
export default function TopicCard({ name, position, totalScenes, status, topic_id }) {
  // pick the illustration
  let svg = null;
  if (name === "banking-basics") svg = banking;
  else if (name === "credit-cards") svg = creditCard;
  else if (name === "budgeting-101") svg = budgeting;

  // label
  const startOrContinue = status === "ACTIVE" ? "continue" : "start";

  const handleCountinue = async()=>{
    
    try{
    const stored = localStorage.getItem("user");
      if(stored){
      const parsed = JSON.parse(stored);
      const user_id = parsed.id
      
      api.post(`/topics/${user_id}/${topic_id}/continue`, { status: "continue" } )
      }
    }catch(err){
      console.log(err.message + "coming from line 27 of topic_card")
    }
    
  }
  return (
    <div className="mx-auto max-w-5xl p-6 md:p-10">
      <section className="relative overflow-hidden rounded-3xl bg-white/80 ring-1 ring-black/5 p-6 md:p-10">
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[var(--color-brand-50)] opacity-60 mix-blend-multiply"></div>

        <div className="relative flex items-center gap-3 text-sm font-semibold tracking-wide text-[var(--color-brand-700)]">
          <span className="uppercase">{position}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-600)]"></span>
          <button className="underline decoration-[var(--color-info-600)] underline-offset-4 hover:opacity-80">
            See details
          </button>
        </div>

        <div className="relative mt-6 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold">{name}</h1>

            <div className="mt-6">
              <div className="flex items-center gap-3">
                <div className="relative h-6 flex-1 overflow-hidden rounded-full bg-[var(--color-brand-50)] ring-1 ring-black/5">
                  <div className="absolute inset-y-0 left-0 w-0 bg-[var(--color-brand-500)]"></div>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-accent-50)] ring-1 ring-black/5">🏆</div>
              </div>
              <div className="mt-2 text-sm font-semibold text-[var(--color-neutral-500)]">
                0 / {totalScenes}
              </div>
            </div>

            {/* ✅ Route to TopicLayout at /topics/:topicid (relative to the Dashboard shell) */}
            <Link to={`topics/${topic_id}`}>
              <button onClick={handleCountinue}
                className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[var(--color-brand-500)] px-8 py-4 text-lg font-bold text-white shadow-sm shadow-black/10 transition hover:bg-[var(--color-brand-600)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-brand-100)]"
              >
                {startOrContinue}
              </button>
            </Link>
          </div>

          <div className="relative">
            <div className="ml-auto max-w-sm rounded-3xl bg-white p-5 text-xl font-semibold text-[var(--color-neutral-900)] ring-1 ring-black/5">
              {status} Active
            </div>

            <img src={svg} alt="" />
            <div className="mx-auto mt-4 h-8 w-40 rounded-full bg-black/5"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
