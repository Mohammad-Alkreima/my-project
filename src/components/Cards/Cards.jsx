import "./Cards.css"
import Card from "../Card/Card"
// import img from "../../../public/assets/img/location.svg"
// import img-1 from "../../../public/assets/img/dollar-circle.svg"
const Cards = () => {
    return (
        <div className="cards">
            <Card icon= "/assets/img/location.svg"
                title="Location"
                description="Ahmedabad, India"
            />
            <Card icon="/assets/img/dollar-circle.svg"
                title="Price"
                description="$1000 - $10,000"
            />
            <Card icon="/assets/img/house.svg"
                title="Type of Property"
                description="Apartment"
            />
        </div>
    )
}

export default Cards
