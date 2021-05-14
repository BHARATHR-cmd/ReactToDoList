import React from 'react';
import Popup from './Popup';
import Randomjoke from './Randomjoke';
import { useState } from 'react';

function Header({ handleToggleDarkMode }) {
    const [buttonPopup, setButtonPopup] = useState(false);

    return ( <
        div className = 'header' >
        <
        h1 > Quick Notes < /h1> <
        button onClick = {
            () =>
            handleToggleDarkMode(
                (previousDarkMode) => !previousDarkMode
            )
        }
        className = 'save' >
        Toggle Mode <
        /button>

        <
        button onClick = {
            () =>
            setButtonPopup(true)

        }
        className = 'save' >
        Random Joke <
        /button> <Popup trigger={buttonPopup} setTrigger={setButtonPopup}><Randomjoke/ > < /Popup> < /
        div >
    );
};

export default Header;