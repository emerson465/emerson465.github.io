const CardExp = (props: {empresa: string, cargo: string, periodo: string, desc: string}) => {
    return (
        <div className='card-experience'>
            <h3>{props.empresa}</h3> 
            <h3>{props.cargo}: {props.periodo}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

export default CardExp