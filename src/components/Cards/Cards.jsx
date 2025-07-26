import "./Cards.css"
import Card from "../Card/Card"
import img from "/assets/img/location.svg"
import img1 from "/assets/img/dollar-circle.svg"
import img2 from "/assets/img/dollar-circle.svg"
const Cards = () => {
    return (
        <div className="cards">
            <Card icon= {img}
                title="Location"
                description="Ahmedabad, India"
            />
            <Card icon={img1}
                title="Price"
                description="$1000 - $10,000"
            />
            <Card icon={img2}
                title="Type of Property"
                description="Apartment"
            />
        </div>
    )
}

export default Cards
