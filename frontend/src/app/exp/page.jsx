"use client"
import react, { useState } from 'react';

function Counter() {
    // define a piece of state called 'count' and a function to update it 'setCount'
    const [count, setCount] = useState(0);
    //function to increament the count when the button is clicked
    const increment = () => {
        setCount(count + 1);
    }



return (
 <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  
 </div>
);
}
export default Counter;
