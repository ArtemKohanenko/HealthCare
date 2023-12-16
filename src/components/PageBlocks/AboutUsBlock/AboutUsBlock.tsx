import BlankButton from '../../BlankButton/BlankButton';
import Divider from '../../Divider/Divider';
import classes from './AboutUsBlock.module.scss'


const AboutUsBlock = () => {
    return <>
        <div className={classes.relativeContainer}>
            <img className={classes.fixedPoints} src='src/assets/points_background.svg'></img>
            <div className={classes.container}>
                <img className={classes.picture} src='src/assets/aboutUs_block_picture.png'/>
                <div className={classes.info}>
                    <div className={classes.textBlock}>
                        <span className={classes.title}>Leading healthcare providers</span>
                        <Divider/>
                        <span className={classes.text}>We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</span>
                    </div>
                    <BlankButton text='Learn more'/>
                </div>
            </div>
        </div>
    </>
}

export default AboutUsBlock;