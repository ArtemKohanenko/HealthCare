import MainBlock from "../MainBlock/MainBlock";
import ServiceCard from "../ServiceCard/ServiceCard";
import ServicesBlock from "../ServicesBlock/ServicesBlock";
import classes from "./Boody.module.scss"

const Body = () => {
    return <>
        <MainBlock/>
        <div className={classes.block2}>
            <ServicesBlock/>
        </div>
    </>
}

export default Body;