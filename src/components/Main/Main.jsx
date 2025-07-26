import AllCardTrending from "../AllCardTrending/AllCardTrending"
import AllCardWorks from "../AllCardWorks/AllCardWorks"
import DreamHome from "../DreamHome/DreamHome"
import TitleSection from "../TitleSection/TitleSection"
import "./Main.css"


const Main = () => {
    return (
        <main>
            <section className="workSection">
                <TitleSection title= "How it Works"
                            description= "Lorem ipsum dolor sit amet, consectetur adipiscing eli"
                />
                <AllCardWorks/>
            </section>
            <section className="dreamHome">
                <DreamHome title= "Find Dream Home"
                            description= "Lorem ipsum dolor sit amet, consectetur adipiscing eli"
                />
            </section>
            <section className="tranding">
                <TitleSection title= "Most Trending"
                                description= "Lorem ipsum dolor sit amet, consectetur adipiscing eli"
                />
                <AllCardTrending/>
            </section>
        </main>
    )
}

export default Main
