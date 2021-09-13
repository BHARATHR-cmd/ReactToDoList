import React, { useState, useEffect } from 'react'
const API_URL = 'https://official-joke-api.appspot.com/random_joke';

function Randomjoke() {
    const [joke, setjoke] = useState('loading...');

    const generatejoke = () => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setjoke(`${data.setup} ${data.punchline}`));

    }
    useEffect(() => {
        generatejoke();
    }, [])
    return ( <
        div >
        <
        p > { joke } < /p> <
        button className = 'another-one'
        onClick = { generatejoke } > Another one😂 < /button>    < /
        div >
    );
}

export default Randomjoke;