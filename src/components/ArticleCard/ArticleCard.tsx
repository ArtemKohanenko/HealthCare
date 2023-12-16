import Link from '../Link/Link';
import classes from './ArticleCard.module.scss'


const ArticleCard = (props: {img_name: string, title: string, text: string}) => {
    return <>
        <div className={classes.wrapper}>
            <img className={classes.image} src={props.img_name}></img>
            <div className={classes.info}>
                <div className={classes.textBlock}>
                    <span className={classes.title}>{props.title}</span>
                    <p className={classes.text}>{props.text}</p>
                </div>
                <Link text='Read more' icon_path='src/assets/active_arrow_right.svg'/>
            </div>
        </div>
    </>
}

export default ArticleCard;