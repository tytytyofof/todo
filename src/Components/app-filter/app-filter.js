
import './app-filter.css';

const AppFilter = (props) =>{

    const {filterBtn} = props
    return(
        <div className="btn-group">
            <button  className="btn btn-light" value='all' onClick={(e) => filterBtn(e.target.value)} type="button">Все сотрудники</button>
            <button className="btn btn-light" value='rise' onClick={(e) => filterBtn(e.target.value)} type="button">На повышение</button>
            <button className="btn btn-light" value='increase' onClick={(e) => filterBtn(e.target.value)} type="button">З\П больше 5000$</button>

        </div>
    )
}

export default AppFilter;