import './app-search.css'

const SearchPanel = (props) =>{
    const {search} = props
    return(
        <input onChange={(event => search(event))} type="text" className="form-control search-input" placeholder="Найти Соткудника"/>
    )
}

export default SearchPanel;