import classes from './FilledButton.module.scss'


const FilledButton = (props: {text: string}) => {
    return <>
        <button className={classes.button}>
            {props.text}
        </button>
    </>
}

export default FilledButton;