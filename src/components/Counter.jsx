import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className='container'>
            <h1>
                Contar: {count}
            </h1>
            <Button onClick={increment}>Increment</Button>{" "}
            <Button onClick={decrement}>Decrement</Button>
        </div>
    );
}

export default Counter;