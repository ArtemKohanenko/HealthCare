import BlankButton from '../../BlankButton/BlankButton';
import Divider from '../../Divider/Divider';
import classes from './DownloadBlock.module.scss'


const DownloadBlock = () => {
    return <>
        <div className={classes.relativeContainer}>
            <img className={classes.fixedPoints} src='src/assets/points_background.svg'></img>
            <div className={classes.container}>
                <div className={classes.info}>
                    <div className={classes.textBlock}>
                        <span className={classes.title}>Download our mobile apps</span>
                        <Divider/>
                        <span className={classes.text}>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</span>
                    </div>
                    <BlankButton text='Download' icon_path='src/assets/download.svg'/>
                </div>
                <img className={classes.picture} src='src/assets/downloadApp_block_picture.png'/>
            </div>
        </div>
    </>
}

export default DownloadBlock;