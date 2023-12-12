import classes from './NavBar.module.scss'


const NavBar = () => {
    return <>
        <div className={classes.container}>
            <span className={classes.item}>Home</span>
            <span className={classes.item}>Find a doctor</span>
            <span className={classes.item}>Apps</span>
            <span className={classes.item}>Testimonials</span>
            <span className={classes.item}>About us</span>
        </div>
    </>
}

export default NavBar;