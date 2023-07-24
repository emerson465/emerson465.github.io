const Skill = (props: {source: string, name: string }) => {
  return (
    <li><img src={props.source} width={72} height={72} alt="" /><p>{props.name}</p></li>
  )
}

export default Skill