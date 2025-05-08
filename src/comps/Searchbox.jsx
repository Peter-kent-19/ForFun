export default function Searchbox(props) {
  return(
        <div className="searchBar">
          <input type="text" onChange={(ev)=>{props.searchV(ev.target.value)}} placeholder="Search for task ..."/>
        </div>
  )
}