import React, { useState } from 'react';

const Counter = () => {
      const [count, setcount] = useState(0)
  return (
    <div>
         <h1>counter: {count}</h1>
      <h2>did a github commit here</h2>
      <button onClick={() => setcount(count + 1)} className='border p-3 ml-3 cursor-pointer'>Inc</button>
      <button onClick={() => count > 0 && setcount(count - 1)} className='border p-3 ml-3 cursor-pointer'>Dec</button>
      <button onClick={() => setcount(0)} className='border p-3 ml-3 cursor-pointer'>reset</button>
      <button onClick={() => setcount(count * 2)} className='border p-3 ml-3 cursor-pointer'>double</button>
    </div>
  );
};

export default Counter;
