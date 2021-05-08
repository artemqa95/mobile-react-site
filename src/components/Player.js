import React from 'react';
import {NavLink} from "react-router-dom";

const Player = () => {

    return (
        <div className={'player'}>

                <div
                    className={"player-inner"}
                    style={{}}>
                    <iframe
                        src={`https://www.youtube.com/embed/PSQZFzyvZ9g`}
                        frameBorder="0"
                    />
                </div>
            <NavLink to={'/'} className={'player-btn-cancel'}>x</NavLink>
        </div>

    );

}

export default Player