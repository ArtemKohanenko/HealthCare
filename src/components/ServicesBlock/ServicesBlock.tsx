import ServiceCard from '../ServiceCard/ServiceCard';
import ServiceCardsGrid from '../ServiceCardsGrid/ServiceCardsGrid';
import TransparentButton from '../TransparentButton/TransparentButton';
import classes from './ServicesBlock.module.scss'


const ServicesBlock = () => {
    const services = [
        {img_name: 'src/assets/service_picture_1.svg', title: 'Search doctor', text: 'Choose your doctor from thousands of specialist, general, and trusted hospitals'},
        {img_name: 'src/assets/service_picture_2.svg', title: 'Online pharmacy', text: 'Buy  your medicines with our mobile application with a simple delivery system'},
        {img_name: 'src/assets/service_picture_3.svg', title: 'Consultation', text: 'Free consultation with our trusted doctors and get the best recomendations'},
        {img_name: 'src/assets/service_picture_4.svg', title: 'Details info', text: 'Free consultation with our trusted doctors and get the best recomendations'},
        {img_name: 'src/assets/service_picture_5.svg', title: 'Emergency care', text: 'You can get 24/7 urgent care for yourself or your children and your lovely family'},
        {img_name: 'src/assets/service_picture_6.svg', title: 'Tracking', text: 'Track and save your medical history and health data '}
    ]

    return <>
        <div className={classes.container}>
            <div className={classes.textContainer}>
                <span className={classes.title}>Our services</span>
                <div className={classes.divider}></div>
                <p className={classes.text}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
            </div>
            <div className={classes.serviceContainer}>
                <ServiceCardsGrid/>
            </div>
            <div className={classes.buttonContainer}>
                <TransparentButton text='Learn more'/>
            </div>
            
        </div>
    </>
}

export default ServicesBlock;