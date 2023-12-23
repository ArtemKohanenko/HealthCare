import BlankButton from '../../BlankButton/BlankButton';
import Divider from '../../Divider/Divider';
import classes from './DownloadBlock.module.scss'


const DownloadBlock = () => {
    return <>
        <section className={classes.container}>
            <div className={classes.info}>
                <div className={classes.textBlock}>
                    <h1 className={classes.title}>Download our mobile apps</h1>
                    <Divider/>
                    <span className={classes.text}>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</span>
                </div>
                <BlankButton text='Download' icon_path='src/assets/arrow_down.svg'/>
            </div>
            <img className={classes.picture} src='src/assets/downloadApp_block_picture.png'/>
        </section>
    </>
}

export default DownloadBlock;