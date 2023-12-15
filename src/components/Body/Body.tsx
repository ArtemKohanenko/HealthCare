import MainBlock from "../PageBlocks/MainBlock/MainBlock";
import ServiceCard from "../ServiceCard/ServiceCard";
import ServicesBlock from "../PageBlocks/ServicesBlock/ServicesBlock";
import classes from "./Boody.module.scss"
import AboutUsBlock from "../PageBlocks/AboutUsBlock/AboutUsBlock";
import DownloadBlock from "../PageBlocks/DownloadBlock/DownloadBlock";

const Body = () => {
    return <>
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
    </>
}

export default Body;