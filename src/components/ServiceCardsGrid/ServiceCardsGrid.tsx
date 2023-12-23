import ServiceCard from '../ServiceCard/ServiceCard';
import classes from './ServiceCardsGrid.module.scss'


const ServiceCardsGrid = () => {
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
        <img src='src/assets/points_background.svg' className={classes.bgPoints}></img>
        <img src='src/assets/bg_vector1.svg' className={classes.bgVector}></img>
        <div className={classes.cards}>
                {
                    services.map((item, i) =>
                        <ServiceCard img_name={item.img_name} title={item.title} text={item.text} key={i}/>)
                }
        </div>
    </div>
    </>
}

export default ServiceCardsGrid;