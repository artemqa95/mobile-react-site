import React from 'react';

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
            <div className={'player-btn-cancel'}>x</div>
        </div>

    );

}

export default Player