import classes from './Header.module.scss'

import NavBar from '../NavBar/NavBar';


const Header = () => {
    return <>
        <header className={classes.header}>
            <div className={classes.wrapper}>
                <div className={classes.logo}>
                    <div className={classes.logoCircle}>
                        <span className={classes.logoLetter}>T</span>
                    </div>
                    <span className={classes.logoTitle}>HealthCare</span>
                </div>
                <NavBar/>
            </div>
        </header>
    </>
}

export default Header;