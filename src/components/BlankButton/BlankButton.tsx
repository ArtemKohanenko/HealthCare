import classes from './BlankButton.module.scss'


const BlankButton = (props: {text: string, icon_path?: string, onClick?: ()=>void}) => {
    return <>
        <button className={classes.button} onClick={props.onClick}>
            <div className={classes.container}>
                <span className={classes.text}>{props.text}</span>
                {
                    props.icon_path
                    ? <img src={props.icon_path} className={classes.icon}></img>
                    : null
                }
            </div>
        </button>
    </>
}

export default BlankButton;