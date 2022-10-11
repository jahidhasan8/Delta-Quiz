import React from 'react';

const Blog = () => {
    return (
        <div className='p-10 '>

            <div className=' w-full md:mx-auto  border-2 border-solid border-slate-500 rounded-md p-4 shadow-lg mb-6 bg-sky-300'>
                <h5 className='font-bold p-2'>
                    1. what is the purpose of react router?
                </h5>
                <p><span>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                    React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications. <br />React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.</span></p>
            </div>
            <div className=' w-full md:mx-auto border-2 border-solid border-slate-500 rounded-md p-4 shadow-lg mb-6  bg-sky-300'>
                <h5 className='font-bold p-2'>
                   2. How does context api works?
                </h5>
                <p><span>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br /> React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.With React Context, we can pass data deeply. While some developers may want to use Context as a global state management solution, doing so is tricky. While React Context is native and simple.The Context API makes it easier to have our global and app-wide data available to all components therefore, making it easier and more accessible. The Context API has been considered as one of the key features of the react framework and a prominent improvement in the recent releases of the framework.</span></p>
            </div>
            <div className=' w-full md:mx-auto border-2 border-solid border-slate-500 rounded-md p-4 shadow-lg  bg-sky-300'>
                <h5 className='font-bold p-2'>
                    3. Describe about useRef?
                </h5>
                <p><span>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax:const refContainer = useRef(initialValue); <br /> The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. <br /> The useRef Hook allows you to persist values between renders.

                    It can be used to store a mutable value that does not cause a re-render when updated.

                    It can be used to access a DOM element directly.</span></p>
            </div>

        </div>
    );
};

export default Blog;