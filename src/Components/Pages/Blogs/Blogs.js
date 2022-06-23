import React from 'react';

const Blogs = () => {
    return (
        <section className='blogs bg-slate-100'>
            <div className='container mx-auto'>
                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-2xl font-heading font-bold">
                        <h2>1. Optimizing performance in a React application</h2>
                    </div>
                    <div className="collapse-content">
                        <u className="text-xl font-paragraph font-bold">Introduction: </u>
                        <p className="font-paragraph font-medium">
                            Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.
                            According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.
                        </p>
                        <u className="text-xl font-paragraph font-bold">Five steps to optimize speed: </u>
                        <div className='font-paragraph font-medium'>
                            1.   Keeping component state local where necessary
                            <br />
                            2.   Memoizing React components to prevent unnecessary re-renders
                            <br />
                            3.   Code-splitting in React using dynamic import()
                            <br />
                            4.   Windowing or list virtualization in React
                            <br />
                            5.   Lazy loading images in React
                        </div>
                    </div>
                </div>
                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-2xl font-heading font-bold">
                        <h2>2. A different way to manage state in React</h2>
                    </div>
                    <div className="collapse-content">
                        <p className="font-paragraph font-medium">
                            Managing state is arguably the hardest part of any application. It's why there are so many state management libraries available and more coming around every day (and even some built on top of others... There are hundreds of "easier redux" abstractions on npm). Despite the fact that state management is a hard problem, I would suggest that one of the things that makes it so difficult is that we often over-engineer our solution to the problem.
                            There's one state management solution that I've personally tried to implement for as long as I've been using React, and with the release of React hooks (and massive improvements to React context) this method of state management has been drastically simplified.
                        </p>

                    </div>
                </div>
                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-2xl font-heading font-bold">
                        <h2>3. How does prototypical inheritance work?</h2>
                    </div>
                    <div className="collapse-content">
                        <u className="text-xl font-paragraph font-bold">Introduction: </u>

                        <p className="font-paragraph font-medium">
                            In programming, we often want to take something and extend it.
                            For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.
                            When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. And soon we’ll study many examples of such inheritance, as well as cooler language features built upon it.
                        </p>

                    </div>
                </div>
                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-2xl font-heading font-bold">
                        <h2>4. Why we do not set the state directly in React</h2>
                    </div>

                    <div className="collapse-content">
                        <u className="text-xl font-paragraph font-bold">One should never update the state directly because of the following reasons: </u>
                        <p className="font-paragraph font-medium">
                            <u className="text-xl font-paragraph font-bold pb-4"> Introduction: </u>
                            Out of all the react questions, this is one that actually helps the interviewer to judge your level of understanding in this subject. Read the answer carefully to understand it properly.
                            1.    If you update it directly, calling the setState() afterward may just replace the update you made.
                            <br />
                            2.    When you directly update the state, it does not change this.state immediately.
                            <br />
                            3.Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                            <br />
                            4.    You will lose control of the state across all components.
                        </p>
                    </div>
                </div>
                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-2xl font-heading font-bold">
                        <h2>5. What is a unit test? Why should write unit tests?</h2>
                    </div>

                    <div className="collapse-content">
                        <p className="font-paragraph font-medium">
                            <u className="text-xl font-paragraph font-bold pb-4">Explanation: </u>
                            Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.
                            UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;