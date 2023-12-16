import Divider from '../../Divider/Divider';
import classes from './CustomersBlock.module.scss'


const CustomersBlock = () => {
    return <>
        <section className={classes.customerContainer}>
            <div className={classes.customerWrapper}>
                <h1 className={classes.title}>What our customer are saying</h1>
                <div className={classes.dividerContainer}>
                    <Divider isLight/>
                </div>
                <div className={classes.info}>
                    <div className={classes.customer}>
                        <img className={classes.customerImage} src='src/assets/customer_picture.png'></img>
                        <div className={classes.personalInfo}>
                            <span className={classes.title}>Edward Newgate</span>
                            <span className={classes.subtitle}>Founder Circle</span>
                        </div>
                    </div>
                    <p className={classes.quote}>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>
                </div>
                <img src='src/assets/points_background2.svg' className={classes.bgPoints1}></img>
                <img src='src/assets/points_background.svg' className={classes.bgPoints2}></img>
            </div>

            <div className={classes.sliderContainer}>
                <button className={`${classes.button} ${classes.buttonBack}`}>
                    <img src='src/assets/blocked_arrow_left.svg'></img>
                </button>
                <div className={classes.points}>
                    <div className={`${classes.point} ${classes.active}`}></div>
                    <div className={classes.point}></div>
                    <div className={classes.point}></div>
                    <div className={classes.point}></div>
                </div>
                <button className={`${classes.button} ${classes.buttonForward}`}>
                    <img src='src/assets/active_arrow_right.svg'></img>
                </button>
            </div>
        </section>
    </>
}

export default CustomersBlock;