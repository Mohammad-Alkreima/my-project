import "./NavBar.css"
const NavBar = ({logo, items, btn, burger}) => {
    return (
        <nav>
            <img src={logo} alt="flora logo" />
            <ul>
                {items.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
            <button className="login">{btn}</button>
            <img className="burgerIcon" src={burger} alt="burger icon" />
        </nav>
    )
}

export default NavBar
