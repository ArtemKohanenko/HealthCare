import classes from './SliderPoints.module.scss'


const SliderPoints = (props: {num: number, numActive: number}) => {

    return <>
        <div className={classes.points}>
            {
                Array.from({length: props.num}, (_, i) => 
                    <div className={`${classes.point} ${props.numActive==i ? classes.active : ''}`} key={i}></div>
                )
            }
        </div>
    </>
}

export default SliderPoints;