import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizDetails = ({ singleQuestion, handleAnswer }) => {

    const { question, correctAnswer, options } = singleQuestion


    const [open, setOpen] = useState(true);

    const handleCorrectAnswer = (event, correctAnswer) => {
        setOpen((active) => !active);

    };

    return (
        <div className=''>
            <ToastContainer />


            <div className='contrast-125 hover:contrast-150 ring-2 ring-purple-500 ring-offset-4 ring-offset-purple-200 grid grid-cols-1 shadow-lg shadow-indigo-500 bg-slate-400  mix-blend-multiply bg-blend-lighten  md:w-3/5 mx-4 md:mx-auto mb-10 py-4 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <div className='flex  px-2  py-6 mx-auto my-6 '>
                    <h4 className='text-xl  text-center px-4'> Test:  {question.replace(/(<([^>]+)>)/ig, '')} </h4>

                    <EyeIcon onClick={handleCorrectAnswer} className={`md:h-6 md:w-6 h-10 w-10 text-slate-500 ${open ? "" : "hidden"}`} />
                    <EyeSlashIcon onClick={handleCorrectAnswer} className={`md:h-6 md:w-6 h-10 w-10 text-slate-500 ${open ? "hidden" : ""}`} />
                </div>

                <div className='grid md:grid-cols-2 md:w-3/5 gap-5 justify-center mx-auto'>
                    {
                        options.map((option, index) => <div key={index}

                            className=" border-solid border-2 border-slate-500 p-3    rounded-md  "
                        >
                            <input onClick={() => handleAnswer(option, correctAnswer)} className='mx-2 cursor-pointer' type="radio" name="answer" id="" />
                            {option}

                        </div>
                        )
                    }
                </div>
            </div>


            <div className="alert alert-info shadow-lg md:w-2/5 flex justify-center  md:mx-auto" style={{ display: open ? 'none' : 'block' }}>
                <div className={open ? "hidden" : ""} >
                    <span > {correctAnswer}</span>
                </div>
            </div>

        </div>
    );
};

export default QuizDetails;