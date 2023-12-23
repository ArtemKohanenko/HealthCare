import classes from './Link.module.scss'


const Link = (props: {text: string, icon_path?: string}) => {
    return <>
        <div className={classes.container}>
            <a className={classes.text}>{props.text}</a>
            {
                props.icon_path
                ? <img src={props.icon_path} className={classes.icon}></img>
                : null
            }
        </div>
    </>
}

export default Link;