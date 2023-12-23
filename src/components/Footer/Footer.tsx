import FooterLink from '../FooterLink/FooterLink';
import classes from './Footer.module.scss'

const Footer = () => {
    return <>
        <footer className={classes.footerContainer}>
            <div className={classes.columns}>
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
                    <FooterLink text='About'></FooterLink>
                    <FooterLink text='Testimonials'></FooterLink>
                    <FooterLink text='Find a doctor'></FooterLink>
                    <FooterLink text='Apps'></FooterLink>
                </div>
                <div className={classes.column}>
                    <span className={classes.title}>Region</span>
                    <FooterLink text='Indonesia'></FooterLink>
                    <FooterLink text='Singapore'></FooterLink>
                    <FooterLink text='Hongkong'></FooterLink>
                    <FooterLink text='Canada'></FooterLink>
                </div>
                <div className={classes.column}>
                    <span className={classes.title}>Help</span>
                    <FooterLink text='Help center'></FooterLink>
                    <FooterLink text='Contact support'></FooterLink>
                    <FooterLink text='Instructions'></FooterLink>
                    <FooterLink text='How it works'></FooterLink>
                </div>
            </div>
            <img className={classes.pointsBg} src='src/assets/points_background2.svg'></img>
        </footer>
    </>
}

export default Footer;