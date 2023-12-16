import classes from './Footer.module.scss'

const Footer = () => {
    return <>
        <footer className={classes.footerContainer}>
            <div className={classes.info}>
                <div className={classes.companyInfo}>
                    <div className={classes.logo}>
                        <div className={classes.logoCircle}>
                            <span className={classes.logoLetter}>T</span>
                        </div>
                        <span className={classes.logoTitle}>HealthCare</span>
                    </div>
                    <p className={classes.textBlock}>HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                </div>
                <span className={classes.rights}>©HealthCare PTY LTD 2023. All rights reserved</span>
            </div>
            <div className={classes.column}>
                <span className={classes.title}>Company</span>
                <span className={classes.link}>About</span>
                <span className={classes.link}>Testimonials</span>
                <span className={classes.link}>Find a doctor</span>
                <span className={classes.link}>Apps</span>
            </div>
            <div className={classes.column}>
                <span className={classes.title}>Region</span>
                <span className={classes.link}>Indonesia</span>
                <span className={classes.link}>Singapore</span>
                <span className={classes.link}>Hongkong</span>
                <span className={classes.link}>Canada</span>
            </div>
            <div className={classes.column}>
                <span className={classes.title}>Help</span>
                <span className={classes.link}>Help center</span>
                <span className={classes.link}>Contact support</span>
                <span className={classes.link}>Instructions</span>
                <span className={classes.link}>How it works</span>
            </div>
            <img className={classes.pointsBg} src='src/assets/points_background2.svg'></img>
        </footer>
    </>
}

export default Footer;