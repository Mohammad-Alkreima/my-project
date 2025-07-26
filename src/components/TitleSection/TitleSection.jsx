import "./TitleSection.css"

const TitleSection = ({title, description}) => {
    return (
        <>
            <h1 className="title">{title}</h1>
            <p className="desc">{description}</p>
        </>
    )
}

export default TitleSection
