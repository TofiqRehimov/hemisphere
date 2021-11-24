import React from 'react'
import './hemisphere.css'
import northernPic from './images/northern_hemisphere.jpg'
import southernPic from './images/southern_hemisphere.jpg'
function HemispHereDisplay({ latitude }) {

    const hemisphereConfig = {

        Northern: {
            text: 'it is northern hemisphere',
            picture: northernPic
        },

        Southern: {
            text: 'it is southern hemispere',
            picture: southernPic
        }
    }

    const hemisphere = latitude > 0 ? "Northern" : "Southern ";
    const { text, picture } = hemisphereConfig[hemisphere]
    return (
        <div className={hemisphere}>
            <div className="ui raised text container segment" >
                <div className="image">
                    <img src={picture} alt="hemisphere picture" />
                </div>
                <div className="ui teal bottom atteched label">
                    <h1>
                        {text}
                    </h1>
                </div>
            </div>


        </div>
    )
}
export default HemispHereDisplay;
