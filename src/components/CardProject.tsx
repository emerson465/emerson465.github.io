const CardProject = (props: {title: string, desc: string, link: string}) => {
  return (
    <div className="card-project">
        <div className="preview-image"></div>
        <div className='info'>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </div>
        <div className="btn">
          <a href={props.link}>Preview</a>
        </div>
      </div>
  )
}

export default CardProject