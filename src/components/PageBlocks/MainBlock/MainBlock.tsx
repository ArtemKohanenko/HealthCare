import FilledButton from '../../FilledButton/FilledButton';
import classes from './MainBlock.module.scss'


const MainBlock = () => {
    return <>
        <section className={classes.relativeContainer}>
            <img className={classes.fixedPoints} src='src/assets/points_background.svg'></img>
            <div className={classes.container}>
                <div className={classes.info}>
                    <div className={classes.textBlock}>
                        <h1 className={classes.title}>Virtual healthcare for you</h1>
                        <span className={classes.text}>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</span>
                    </div>
                    <FilledButton text='Consult today'/>
                </div>
                <img className={classes.picture} src='src/assets/main_block_picture.png'/>
            </div>
        </section>
    </>
}

export default MainBlock;