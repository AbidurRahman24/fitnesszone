import React from 'react';

const Loading = () => {
    return (
        <>
         <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}}>70%</div>   
        </>
    );
};

export default Loading;