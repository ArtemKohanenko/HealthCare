import classes from './BlankButton.module.scss'


const BlankButton = (props: {text: string}) => {
    return <>
        <button className={classes.button}>{props.text}</button>
    </>
}

export default BlankButton;