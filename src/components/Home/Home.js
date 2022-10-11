import React from 'react';

const Home = () => {
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
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Home;