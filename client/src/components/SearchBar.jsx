//import Search from "./Search";
function SearchBar(props){
    return (
        <div>
            <input 
            type="text" 
            value={props.searchField} 
            onChange = {(e)=>props.SetSearchField(e.target.value)}
            className="f4 pa2 w-70 center"/>
            <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-blue ">search</button>
        </div>
    )
}

export default SearchBar;
