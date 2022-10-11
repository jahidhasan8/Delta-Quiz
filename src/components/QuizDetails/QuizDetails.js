import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizDetails = ({ singleQuestion, handleAnswer }) => {
    // console.log(question);
    const { question, correctAnswer, options } = singleQuestion
    // console.log(singleQuestion);

    const [open, setOpen] = useState(true);

    const handleCorrectAnswer = (event,correctAnswer) => {
        setOpen((active) => !active);
        // toast.info(correctAnswer)
    };

    return (
        <div className=''>
            <ToastContainer />
        

            <div className='grid grid-cols-1 shadow-lg shadow-indigo-500 bg-slate-300 mix-blend-multiply bg-blend-lighten  md:w-3/5 mx-4 md:mx-auto mb-10 py-4'>
                <div className='flex justify-center px-2 items-center py-6 mx-auto my-6 '>
                    <h4 className='text-xl  text-center px-4'> Test:  {question.replace(/(<([^>]+)>)/ig, '')} </h4>

                    <EyeIcon onClick={handleCorrectAnswer} className={`md:h-6 md:w-6 h-10 w-10 text-slate-500 ${open ? "" : "hidden"}`} />
                    <EyeSlashIcon onClick={handleCorrectAnswer} className={`md:h-6 md:w-6 h-10 w-10 text-slate-500 ${open ? "hidden" : ""}`} />
                </div>

                <div className='grid md:grid-cols-2 md:w-3/5 gap-5 justify-center mx-auto'>
                    {
                        options.map((option, index) => <div key={index}

                            className=" border-solid border-2 border-slate-500 p-3    rounded-md  "
                        >
                            <input onClick={() => handleAnswer(option, correctAnswer)} className='mx-2 cursor-pointer' type="radio" name="" id="" />
                            {option}

                        </div>
                        )
                    }
                </div>
            </div>
              
            
            <div className="alert alert-info shadow-lg md:w-2/5 flex justify-center  md:mx-auto">
                <div  className={open ? "hidden" : ""} >
                    <span> {correctAnswer}</span>
                </div>
            </div>
            
        </div>
    );
};

export default QuizDetails;