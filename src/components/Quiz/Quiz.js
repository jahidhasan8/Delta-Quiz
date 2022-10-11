import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const allData=useLoaderData().data
    const{name,questions}=allData;
    //  console.log(questions);

    const [answer, setAnswer] = useState([]);
    const right = () =>
      toast.success("Your answer is correct", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    const wrong = () =>
      toast.error("Your answer is wrong 😞", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });


    const handleAnswer = (option, correctAns) => {
        if (option === correctAns) {
          right();
          if (!answer.includes(correctAns)) {
            let rightAnsArr = [...answer, correctAns];
            setAnswer(rightAnsArr);
          }
        } else {
          wrong();
        }
      };

    return (
        <div>
            <h1 className='text-center font-bold text-2xl mt-6'>Quiz Of {name}</h1>
            <div className='flex-1 text-center px-6 mt-12 gap-10'>
            {/* lg:grid-cols-2  gap-5 */}
            {/* grid grid-cols-1 */}
            {
                questions.map(singleQuestion=><QuizDetails 
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