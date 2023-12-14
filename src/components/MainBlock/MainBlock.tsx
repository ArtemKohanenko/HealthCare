import classes from './MainBlock.module.scss'


const MainBlock = () => {
    return <>
        <div className={classes.relativeContainer}>
            <img className={classes.fixedPoints} src='src/assets/points_background.svg'></img>
            <div className={classes.container}>
                <div className={classes.info}>
                    <div className={classes.textBlock}>
                        <span className={classes.title}>Virtual healthcare for you</span>
                        <span className={classes.text}>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</span>
                    </div>
                    <button className={classes.button}>
                        Consult today
                    </button>
                </div>
                <img className={classes.picture} src='src/assets/main_block_picture.png'/>
                
            </div>
        </div>
    </>
}

export default MainBlock;