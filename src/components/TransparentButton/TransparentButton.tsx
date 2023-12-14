import classes from './TransparentButton.module.scss'


const TransparentButton = (props: {text: string}) => {
    return <>
        <button className={classes.button}>{props.text}</button>
    </>
}

export default TransparentButton;