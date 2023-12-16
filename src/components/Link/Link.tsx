import classes from './Link.module.scss'


const Link = (props: {text: string, icon_path?: string}) => {
    return <>
        <button className={classes.button}>
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

export default Link;