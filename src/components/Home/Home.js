import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Home = () => {
    const quizTopics = useLoaderData().data
    
    return (

        <div>
            <div className='flex justify-center items-center gap-10'>
                <div>
                    <h1 className='text-4xl font-bold'>Welcome To Delta Quiz </h1>
                    <h6 className='p-3'><span>Here you can test your Knowledge easily.  So, hurry up and start your Quiz</span></h6>
                </div>

                <div className='w-96 mt-10'>
                    <img className='rounded-md' src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-4  gap-4 px-4 py-10'>
                {
                    quizTopics.map(topic =>
                        <div className="card card-compact  bg-slate-400 shadow-xl" key={topic.id}>
                            <figure><img className='w-full h-56' src={topic.logo} alt="" /></figure>
                            <div className="card-body ">
                                <h2 className="card-title">{topic.name}</h2>
                                <p>Questions : {topic.total}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/quiz/${topic.id}`}><button className="btn btn-md bg-slate-500">Start Quiz<ArrowRightIcon className="text-white h-6 w-6"/></button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>



    );
};

export default Home;