import "./CardWorks.css"


const CardWorks = ({icon, title, description}) => {
    return (
        <div className="cardWork">
            <img src={icon} alt="icon"/>
            <h1>{title}</h1>
            <p>{description}</p>
            
        </div>
    )
}

export default CardWorks
