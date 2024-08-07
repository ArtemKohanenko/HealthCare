import classes from './NavBar.module.scss'


const NavBar = () => {
    return <>
        <nav className={classes.container}>
            <span className={`${classes.item} ${classes.selected}`}>Home</span>
            <span className={classes.item}>Find a doctor</span>
            <span className={classes.item}>Apps</span>
            <span className={classes.item}>Testimonials</span>
            <span className={classes.item}>About us</span>
        </nav>
    </>
}

export default NavBar;