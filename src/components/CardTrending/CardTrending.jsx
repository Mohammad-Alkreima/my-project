import "./CardTrending.css"


const CardTrending = ({image, price, title, icon, desc}) => {
    return (
        <div className="cardTrend">
            <img src={image} alt="house" />
            <h2>{price}</h2>
            <h3>{title}</h3>
            <div>
                <img src={icon} alt="location icon" />
                <span>{desc}</span>
            </div>
        </div>
    )
}

export default CardTrending
