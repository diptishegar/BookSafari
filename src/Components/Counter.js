import React, {useState} from "react";

function Counter(){
    const [state, setstate] = useState(0)
    return(
        <div>
            <h4>{state}</h4>
       <button onClick={() => setstate(state+1)}>
           Add
       </button>
        </div>
    )
}

export default Counter;