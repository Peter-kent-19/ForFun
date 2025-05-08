export default function Task(props) {
  const handleClick = (status, targ) => {
      status ? targ.style.background = 'green' : targ.style.background = '#fff'
  }
  return(
        <div className="task" idd={props.idd} onClick={(e)=>{handleClick(props.statue, e.target)}}>
             <div className="tas">{props.task}{props.task}</div>
             <div className="delBtn hover" onClick={(e) => {props.event(e)}}>Del</div>
             
        </div>
  )
}