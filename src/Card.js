import './card.css'
export function Card({logo ,title, description}) {
    return (
        <div className="card">
            <h5 id="h5">{title}</h5>
            <div className="red"></div>
            <p>{description}</p>
        </div>
    )
}