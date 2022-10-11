import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';
import { toast } from "react-toastify";
const Quiz = () => {
  const allData = useLoaderData().data
  const { name, questions } = allData;


  const [answer, setAnswer] = useState([]);

  const handleAnswer = (option, correctAnswer) => {

    if (option === correctAnswer) {
      toast.success('your answer is correct', { autoClose: 500 })
      if (!answer.includes(correctAnswer)) {
        let exactAnswer = [...answer, correctAnswer];
        setAnswer(exactAnswer);

      }
    } else {
      toast.error("Your answer is wrong ", { autoClose: 500 })
    }
  };

  return (
    <div>
      <h1 className='text-center font-bold text-2xl mt-6'>Quiz Of {name}</h1>
      <h2 className="font-bold text-center bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-300 mt-6 p-3 text-white rounded w-2/5 mx-auto">
        Your Score is : {answer.length}
      </h2>
      <div className='flex-1 text-center px-2 mt-12 gap-10'>

        {
          questions.map(singleQuestion => <QuizDetails
            singleQuestion={singleQuestion}
            key={singleQuestion.id}
            handleAnswer={handleAnswer}
          ></QuizDetails>)
        }
      </div>
    </div>
  );
};

export default Quiz;