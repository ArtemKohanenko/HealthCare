import MainBlock from "../PageBlocks/MainBlock/MainBlock";
import ServicesBlock from "../PageBlocks/ServicesBlock/ServicesBlock";
import classes from "./Boody.module.scss"
import AboutUsBlock from "../PageBlocks/AboutUsBlock/AboutUsBlock";
import DownloadBlock from "../PageBlocks/DownloadBlock/DownloadBlock";
import CustomersBlock from "../PageBlocks/CustomersBlock/CustomersBlock";
import ArticlesBlock from "../PageBlocks/ArticlesBlock/ArticlesBlock";

const Body = () => {
    return <>
        <main>
            <MainBlock/>
            <div className={classes.block2}>
                <ServicesBlock/>
            </div>
            <div className={classes.block3}>
                <AboutUsBlock/>
            </div>
            <div className={classes.block4}>
                <DownloadBlock/>
            </div>
            <div className={classes.block5}>
                <CustomersBlock/>
            </div>
            <div className={classes.block6}>
                <ArticlesBlock/>
                <img src='src/assets/points_background.svg' className={classes.points_bg}></img>
            </div>
        </main>
    </>
}

export default Body;