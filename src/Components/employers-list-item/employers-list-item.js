import './employers-list-item.css'

const EmpListItem = ({name, salary, onDelete, onToggleIncrease, onToggleRise, rise, increase}) => {


    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += ' increase';
    }
    if (rise) {
        classNames += ' like';
    }
    return (
        <li className={classNames}>
            <span onClick={onToggleIncrease} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-item-center">
                <button onClick={onToggleRise} type="button" className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"> </i>
                </button>
                <button type="button" className="btn-trash btn-sm">
                    <i className="fas fa-trash" onClick={onDelete}> </i>
                </button>

                <i className="fas fa-star"> </i>
            </div>
        </li>
    )


}

export default EmpListItem;