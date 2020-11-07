import React from 'react';
import './Suggestions.css';
import { tips } from './tips.json';

function Suggestions(props) {



    function pickTip() {
        const tipCount = tips.length;
        let randomTip = Math.floor(Math.random() * tipCount);
        return tips[randomTip];
    }

    return (
        <div className="Suggestions">
            <div className="Resources">
                <h1>Resources</h1>
                <p></p>
            </div>
            <div className="Tip">
                <h1>Tip!</h1>
                <p>{pickTip()}</p>
            </div>
        </div>
    );
}



export default Suggestions;
