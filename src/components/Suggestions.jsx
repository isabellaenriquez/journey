import React, { useState, useEffect } from 'react';
import './Suggestions.css';
import { tips } from './tips.json';
import { resources, crisis } from './resources.json';

function Suggestions(props) {



    function pickTip() {
        const tipCount = tips.length;
        let randomTip = Math.floor(Math.random() * tipCount);
        return tips[randomTip];
    }

    function tailorResources(score) {
        // make sure to get the user's data
        let list = "";
        let i;
        if (score < 0) {
            // add crisis resources 
            for (i = 0; i < crisis.length; i++) {
                list += '<div className="resource">';
                
                if (crisis[i].web){
                    list+= '<a href="' + crisis[i].web + '">'
                }
    
                list += '<h4>' + crisis[i].name + '</h4>';
    
                if (crisis[i].web){
                    list+='</a>';
                }

                list += '<p>' + crisis[i].description + '</p>';
                if (crisis[i].phone) {
                    list += '<p>Call ' + crisis[i].phone + '</p>';
                }
                if (crisis[i].text) {
                    list += '<p>Text ' + crisis[i].text + '</p>';
                }
                list += '</div>'
            }
        }
        for (i = 0; i < resources.length; i++) {
            list += '<div className="resource">';
            
            if (resources[i].web){
                list+= '<a href="' + resources[i].web + '">'
            }

            list += '<h4>' + resources[i].name + '</h4>';

            if (resources[i].web){
                list+='</a>';
            }
            list += '<p>' + resources[i].description + '</p>';
            if (resources[i].phone) {
                list += '<p>Call ' + resources[i].phone + '</p>';
            }
            if (resources[i].text) {
                list += '<p>Text ' + resources[i].text + '</p>';
            }
            list += '</div>'
        }
        return list;
    }

    const [resourceList, setResources] = useState("");

    useEffect(() => {
        setResources(tailorResources(props.score)); // tailor resources depending on average mood
    }, [props.score]);


    return (
        <div className="Suggestions" id="suggestions">
            <div className="Tip">
                <table>
                    <tr>
                        <td>
                <h1>Tip</h1>
                            <p>{pickTip()}</p></td>
                        <td><img src="https://cdn1.iconfinder.com/data/icons/light-bulb-emoticons/512/Happy-Emoji-Emotion-Face-Expression-Feeling_1-512.png" alt=""></img>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="Resources">
                <h1>Resources</h1>
                <div className="content" dangerouslySetInnerHTML={{ __html: resourceList }}></div>
            </div>
        </div>
    );
}



export default Suggestions;
