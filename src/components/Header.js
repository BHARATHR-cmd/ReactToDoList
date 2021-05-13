import React from 'react';
import Popup from './Popup';
import FetchRandomUser from './randomjoke';
import { useState } from 'react';

function Header({ handleToggleDarkMode }) {
    const [buttonPopup, setButtonPopup] = useState(false);

    return ( <
        div className = 'header' >
        <
        h1 > Notes < /h1> <
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
        /button> <Popup trigger={buttonPopup} setTrigger={setButtonPopup}><FetchRandomUser/ > < /Popup> < /
        div >
    );
};

export default Header;