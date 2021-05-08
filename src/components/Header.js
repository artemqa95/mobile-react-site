import logo from '../images/header/logo.svg'
import ellipse from '../images/header/ellipse.svg'
import circles from '../images/header/circles.svg'
import background from '../images/header/background.png'
import play from '../images/header/play.svg'
import {useState} from "react";
import Player from "./Player";

const Header = () => {

    const [showVideo, setShowVideo] = useState(false)

    const playClickHandler = () => {
        setShowVideo(true)
    }
    console.log(showVideo)
    return (
        <>
            {showVideo ? <Player/> : null}
            <header className={'header'}>
                <div className={'header-logo'}>
                    <img id={'header-img-logo'} src={logo} alt="logo"/>
                </div>
                <div className={'header-section'}>
                    <img id={'header-img-circles'} src={circles} alt=""/>
                    <div className={'header-section-video'}>
                        <img id={'header-img-background'} src={background} alt=""/>
                        <div className={'header-section-video-play'} onClick={playClickHandler}>
                            <img id={'header-img-play'} src={play} alt=""/>
                        </div>
                    </div>
                    <img id={'header-img-ellipse'} src={ellipse} alt=""/>
                </div>
            </header>
        </>
    )
}

export default Header