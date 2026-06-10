export default function Texto({ titulo , texto }){
    return(
        <div className="textoCard">
            <div className="tituloCard">
                <h1>{titulo}</h1>
            </div>

            <div className="texto">
                <p>{texto}</p>
            </div>
        </div>
    )
}