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
            {/* flex  justify-between  */}
            <div className='flex justify-center items-center py-12 mx-auto my-10 shadow-lg shadow-slate-600	w-3/5 '>
                <h4 className='text-xl px-12'> Test:  {question.replace(/(<([^>]+)>)/ig, '')} </h4>

                <EyeIcon onClick={handleCorrectAnswer} className={`h-6 w-6 text-slate-500 ${open ? "" : "hidden"}`} />
                <EyeSlashIcon onClick={handleCorrectAnswer} className={`h-6 w-6 text-slate-500 ${open ? "hidden" : ""}`} />
            </div>

          {/*   {
                options.map((option, index) => <div key={index}

                    className="cursor-pointer border-solid border-2 border-blue-600  p-3 rounded"
                >
                    {option}
                </div>
                )
            } */}


        </div>
    );
};

export default QuizDetails;