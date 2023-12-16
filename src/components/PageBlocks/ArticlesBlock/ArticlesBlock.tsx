import ArticleCard from '../../ArticleCard/ArticleCard';
import BlankButton from '../../BlankButton/BlankButton';
import Divider from '../../Divider/Divider';
import classes from './ArticlesBlock.module.scss'


const ArticlesBlock = () => {

    const articles = [
        {img_name: 'src/assets/article_picture1.png', title: 'Disease detection, check up in the laboratory', text: 'In this case, the role of the health laboratory is very important to do a disease detection...'},
        {img_name: 'src/assets/article_picture2.png', title: 'Herbal medicines that are safe for consumption', text: 'Herbal medicine is very widely used at this time because of its very good for your health...'},
        {img_name: 'src/assets/article_picture3.png', title: 'Natural care for healthy facial skin', text: 'A healthy lifestyle should start from now and also for your skin health. There are some...'}
    ]

    return <>
        <section className={classes.blockContainer}>
            <h1 className={classes.title}>Check out our latest article</h1>
            <div className={classes.dividerContainer}>
                <Divider/>
            </div>
            <div className={classes.cards}>
                {
                    articles.map((item) => <ArticleCard img_name={item.img_name} title={item.title} text={item.text}/>)
                }
            </div>
            <div className={classes.buttonContainer}>
                <BlankButton text='View all'/>
            </div>
            <img className={classes.points} src='src/assets/points_background.svg'></img>
            <img className={classes.bgVector} src='src/assets/bg_vector1.svg'></img>
        </section>
    </>
}

export default ArticlesBlock;