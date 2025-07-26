import Hero from "../Hero/Hero"
import NavBar from "../NavBar/NavBar"
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <NavBar logo="/assets/img/logo.png"
                items={["Home", "About", "Services", "New Property", "Contact"]}
                btn="Login"
                burger="/assets/img/burger.svg"
            />
            <Hero title="Discover a place you will love to live"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque."
            />
        </header>
    )
}

export default Header
