import MainBlock from "../PageBlocks/MainBlock/MainBlock";
import ServiceCard from "../ServiceCard/ServiceCard";
import ServicesBlock from "../PageBlocks/ServicesBlock/ServicesBlock";
import classes from "./Boody.module.scss"
import AboutUsBlock from "../PageBlocks/AboutUsBlock/AboutUsBlock";

const Body = () => {
    return <>
        <MainBlock/>
        <div className={classes.block2}>
            <ServicesBlock/>
        </div>
        <div className={classes.block3}>
            <AboutUsBlock/>
        </div>
    </>
}

export default Body;