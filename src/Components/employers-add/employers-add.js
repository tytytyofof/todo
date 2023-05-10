import './employers-add.css';
import {Component} from "react";

class EmployersAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0,
            id: 0
        }
    }

    onValueChange = (e) => {

    }



    render() {
        const {name, salary} = this.state;
        const {addItem} = this.props
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут" onChange={this.onValueChange}
                           value={name}
                           name='name'/>

                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З\П" onChange={this.onValueChange}
                           value={salary}
                           name='salary'/>

                    <button type="submit" onClick={(e) => addItem(e, name, salary)} className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAdd;