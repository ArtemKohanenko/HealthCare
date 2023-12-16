import classes from './Divider.module.scss'


interface Props {
    isLight?: boolean
}
    
const Divider = ({isLight = false}: Props) => {

    return <>
        <div className={`${classes.divider} ${isLight ? classes.light : classes.dark}`}></div>
    </>
}

export default Divider;
