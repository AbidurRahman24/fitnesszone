import React from 'react';

const Faq = () => {
    return (
        <>
            <div className='text-center flex py-10'>
                <h1 className='pl-3 items-center  text-4xl'> <b>FAQ</b></h1>
            </div>
            <div class="flex flex-wrap space-x-5">
                <div class="item w-96 h-60 flex-auto">
                    <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title ">
                            <p>Difference between Javascript and nodejs</p>
                        </div>
                        <div className="collapse-content ">
                            <h5>Javascript</h5>
                            <p>1.A programming language is Javascript. it works in any browser that has a suitable brower engine</p>
                            <h5>Node JS</h5>
                            <p>It's a Javascript interpreter and environment with some importand libraries that javascript developers can use individually</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border my-3 border-base-300 bg-base-100 rounded-box">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title ">
                            <p>Difference between Javascript and nodejs</p>
                        </div>
                        <div className="collapse-content ">
                            <h5>Javascript</h5>
                            <p>1.A programming language is Javascript. it works in any browser that has a suitable brower engine</p>
                            <h5>Node JS</h5>
                            <p>It's a Javascript interpreter and environment with some importand libraries that javascript developers can use individually</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title ">
                            <p>Difference between Javascript and nodejs</p>
                        </div>
                        <div className="collapse-content ">
                            <h5>Javascript</h5>
                            <p>1.A programming language is Javascript. it works in any browser that has a suitable brower engine</p>
                            <h5>Node JS</h5>
                            <p>It's a Javascript interpreter and environment with some importand libraries that javascript developers can use individually</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border my-3 border-base-300 bg-base-100 rounded-box">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title ">
                            <p>Difference between Javascript and nodejs</p>
                        </div>
                        <div className="collapse-content ">
                            <h5>Javascript</h5>
                            <p>1.A programming language is Javascript. it works in any browser that has a suitable brower engine</p>
                            <h5>Node JS</h5>
                            <p>It's a Javascript interpreter and environment with some importand libraries that javascript developers can use individually</p>
                        </div>
                    </div>
                </div>
                <div class="item w-96 h-80 flex-auto">
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/640/300/tech" alt="Movie" /></figure>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;