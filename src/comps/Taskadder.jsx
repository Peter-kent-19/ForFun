export default function Taskadder(props) {
  return(
        <div className="addTask">
            <div className="hd">Add New Task</div>
            <div className="inp">
                <input type="text"  name="" id="" placeholder="Enter new Task" />
                <div className="addBtn hover" onClick={(e)=>{
                  let parent = e.target.parentElement;
                  let inp = parent.querySelector('input');
                  props.addTas(inp.value);
                  inp.value = "";
                }}>Add</div>
            </div>
        </div>
  )
}