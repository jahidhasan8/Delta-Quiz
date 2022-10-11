import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

const QuizDetails = ({ singleQuestion }) => {
    // console.log(question);
    const { id, question, correctAnswer, options } = singleQuestion
    console.log(options);

    const [open, setOpen] = useState(true);

    const handleCorrectAnswer = (event) => {
        setOpen((active) => !active);
    };

    return (
        <div className=''>
        
            <div className='grid grid-cols-1 shadow-lg shadow-indigo-500 bg-slate-300 mix-blend-multiply bg-blend-lighten  md:w-3/5 mx-4 md:mx-auto mb-10 py-4'>
            <div className='flex justify-center px-2 items-center py-6 mx-auto my-6 '>
                <h4 className='text-xl  text-center px-4'> Test:  {question.replace(/(<([^>]+)>)/ig, '')} </h4>

                <EyeIcon onClick={handleCorrectAnswer} className={`md:h-6 md:w-6 h-10 w-10 text-slate-500 ${open ? "" : "hidden"}`} />
                <EyeSlashIcon onClick={handleCorrectAnswer} className={`md:h-6 md:w-6 h-10 w-10 text-slate-500 ${open ? "hidden" : ""}`} />
            </div>

            <div className='grid md:grid-cols-2 md:w-3/5 gap-5 justify-center mx-auto'>
                {
                    options.map((option, index) => <div key={index}

                        className="cursor-pointer border-solid border-2 border-slate-500 p-3    rounded-md  "
                    >

                        {option}

                    </div>
                    )
                }
            </div>
            </div>


        </div>
    );
};

export default QuizDetails;