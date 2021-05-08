import logo from '../images/header/logo.svg'
import ellipse from '../images/header/ellipse.svg'
import circles from '../images/header/circles.svg'
import background from '../images/header/background.png'
import play from '../images/header/play.svg'
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <header className={'header'}>
            <div className={'header-logo'}>
                <img id={'header-img-logo'} src={logo} alt="logo"/>
            </div>
            <div className={'header-section'}>
                <img id={'header-img-circles'} src={circles} alt=""/>
                <div className={'header-section-video'}>
                    <img id={'header-img-background'} src={background} alt=""/>
                    <NavLink to={'/video'} className={'header-section-video-play'}>
                        <img id={'header-img-play'} src={play} alt=""/>
                    </NavLink>
                </div>
                <img id={'header-img-ellipse'} src={ellipse} alt=""/>
            </div>
        </header>
    )
}

export default Header