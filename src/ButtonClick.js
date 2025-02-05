import React, { useState } from "react";

function ClickCounterButton() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <button onClick={handleClick}>
            Clicked {count} {count === 1 ? 'time' : 'times'}
        </button>
    )
}

export default ClickCounterButton;