import React from 'react';
import Countdown from 'react-countdown';

const Count = () => {

    return (
        <>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center">
               
                <div className="flex flex-col">
                    
                       <Countdown className='text-5xl' date={Date.now() + 20000000} />
                    hours
                </div>
                
            </div>
        </>
    );
};

export default Count;