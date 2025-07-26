import Cards from "../Cards/Cards"
import "./Hero.css"
const Hero = ({title, description}) => {
    return (
        <div className="hero">
            <h1 className="title">{title}</h1>
            <p className="desc">{description}</p>
            <Cards/>
        </div>
    )
}

export default Hero
