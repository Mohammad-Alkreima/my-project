import "./Card.css"

const Card = ({icon, title, description}) => {
    return (
        <div className="card">
            <div className="img">
                <img src={icon} alt="icon" />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card
