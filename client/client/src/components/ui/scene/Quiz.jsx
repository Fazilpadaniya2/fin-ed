import { useState, useEffect } from "react";

export default function Quiz({ question, option_a, option_b, option_c, option_d, onComplete, answer, postCompleted }) {
  const [selected, setSelected] = useState(null);
const [check, setCheck] = useState(null);
const options = [option_a, option_b, option_c, option_d]


function handleClick(e, idx){
  setSelected(e.target.innerHTML);
  console.log(idx);
  let optNum = "x";
   switch (idx) {
    case 0:
      optNum = "A";
      break;
    case 1:
      optNum = "B";
      break;
    case 2:
      optNum = "C";
      break;
    case 3:
      optNum = "D";
        break;
      default:
        break;
   }
   console.log(optNum);
  if(optNum == answer.trim()){
    console.log("line 14 QUiz.jsx")
    setCheck(true);

    postCompleted(true);
   }else{

   setCheck(false);
   }
  
  }


useEffect(() => {

   setSelected(null);
    setCheck(null);

}, [ question, option_a])



  return (
    <div>
      {check == null && (
        <div className="p-6 bg-neutral-50 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">{question}</h2>
          <div className="flex flex-col gap-2">
            {options.map((opt, idx) => (
              <button
                key={idx}
                onClick={(e) => handleClick(e, idx)}
                className={`p-2 rounded-lg border ${
                  selected === opt ? "bg-green-500 text-white" : "bg-white"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
      {check === true && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Yay right</h2>
          <button
            onClick={onComplete}
            className="mt-4 px-4 py-2 rounded-lg bg-blue-500 text-white"
          >
            Next
          </button>
        </div>
      )}
      {check === false && (
        <div>
          <h2 className="text-xl font-semibold mb-4">oops wrong answer</h2>
          <button
            onClick={onComplete}
            className="mt-4 px-4 py-2 rounded-lg bg-blue-500 text-white"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}