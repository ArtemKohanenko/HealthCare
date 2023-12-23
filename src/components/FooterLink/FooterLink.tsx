import classes from './FooterLink.module.scss'


const FooterLink = (props: {text: string}) => {
    return <>
        <a className={classes.text}>{props.text}</a>
    </>
}

export default FooterLink;