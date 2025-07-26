import CardWorks from "../CardWorks/CardWorks"
import "./AllCardWorks.css"


function AllCardWorks() {
    return (
        <div className="allCardsWork">
            <CardWorks icon= "/assets/img/search.svg"
                            title= "Search Apartment"
                            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
            />
            <CardWorks icon= "/assets/img/search.svg"
                            title= "Select Apartment"
                            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
            />
            <CardWorks icon= "/assets/img/Frame.svg"
                            title= "Search Apartment"
                            description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae."
            />
        </div>
    )
}

export default AllCardWorks
