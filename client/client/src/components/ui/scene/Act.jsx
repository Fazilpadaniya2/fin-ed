import OptionCard from "../OptionsCard.jsx";
import Question from "../Question.jsx";

export default function Act({ question = "What do you hear?", options = [] }) {
   
   
   function HandelClick(){

   }
   
    return (
        <>

<div className="min-h-screen bg-[var(--color-neutral-50)] flex items-center justify-center px-6">
      <div className="w-full max-w-5xl">
        <Question text={question} />

        <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {options.map((opt, i) => (
            <OptionCard
              key={i}
              index={i + 1}
              option={opt}
              onClick={() => onSelect?.(i, opt)}
            />
          ))}
        </div>
      </div>
    </div>        
        </>
    );
}

