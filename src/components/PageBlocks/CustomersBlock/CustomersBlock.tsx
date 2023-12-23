import { useEffect, useState } from 'react';
import Divider from '../../Divider/Divider';
import classes from './CustomersBlock.module.scss'
import SliderPoints from '../../SliderPoints/SliderPoints';


const CustomersBlock = () => {
    const customers = [
        {name: 'Edward Newgate', subtitle: 'Founder Circle', quote: 'Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely'},
        {name: 'Nill Kigger', subtitle: 'N-Men', quote: 'What the fuck man'},
        {name: 'Robert Polson', subtitle: 'Fatman', quote: 'bro'},
        {name: 'Nill Kigger', subtitle: 'N-Men', quote: 'What the fuck man'}
    ]
    const customersCount = customers.length;
    const blockedIcon = 'src/assets/blocked_arrow_left.svg';
    const activeIcon = 'src/assets/active_arrow_left.svg';

    const [currentCustomer, setCurrentCustomer] = useState(0);
    const [isBackActive, setIsBackActive] = useState(false);
    const [isForwardActive, setIsForwardActive] = useState(true);

    useEffect(() => {
        if (currentCustomer == customersCount - 1) {
            setIsForwardActive(false);
        }
        else if (currentCustomer == 0) {
            setIsBackActive(false);
        }
    }, [currentCustomer])

    const sliderForwardHandler = () => {
        if (isForwardActive) {
            setCurrentCustomer(currentCustomer + 1);
            if (!isBackActive) {
                setIsBackActive(true);
            }
        }
    }

    const sliderBackHandler = () => {
        if (isBackActive) {
            setCurrentCustomer(currentCustomer - 1);
            if (!isForwardActive) {
                setIsForwardActive(true);
            }
        }
    }

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
                            <span className={classes.title}>{customers[currentCustomer].name}</span>
                            <span className={classes.subtitle}>{customers[currentCustomer].subtitle}</span>
                        </div>
                    </div>
                    <p className={classes.quote}>“{customers[currentCustomer].quote}”</p>
                </div>
                <img src='src/assets/points_background2.svg' className={classes.bgPoints1}></img>
                <img src='src/assets/points_background.svg' className={classes.bgPoints2}></img>
            </div>

            <div className={classes.sliderContainer}>
                <button className={`${classes.button} ${isBackActive ? classes.active : classes.blocked}`} onClick={() => sliderBackHandler()}>
                    <img src={isBackActive ? activeIcon : blockedIcon}></img>
                </button>
                <SliderPoints num={customersCount} numActive={currentCustomer}/>
                <button className={`${classes.button} ${classes.forward} ${isForwardActive ? classes.active : classes.blocked}`} onClick={() => sliderForwardHandler()}>
                    <img src={isForwardActive ? activeIcon : blockedIcon}></img>
                </button>
            </div>
        </section>
    </>
}

export default CustomersBlock;