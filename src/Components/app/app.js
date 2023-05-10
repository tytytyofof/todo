import {Component} from "react";

import AppHeader from "../app-header/app-header";
import SearchPanel from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAdd from "../employers-add/employers-add";

import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Bogdan Sas', salary: 10000, increase: false, rise: true, id: 1},
                {name: 'Nika Rasulova', salary: 8000, increase: true, rise: false, id: 2},
                {name: 'Dana', salary: 2200, increase: false, rise: false, id: 3},
            ],
            term: '',
            filter: ''
        }
        this.maxId = 4;
    }


    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }

        })
    }


    addItem = (e, name, salary) => {
        e.preventDefault()
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            return {
                data: [...data, newItem]
            }
        })

    }
    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        return {...item, increase: !item.increase}
                    }
                    return item;

                })
            }

        })


    }
    onToggleRise = (id) => {
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        return {...item, rise: !item.rise}
                    }
                    return item;

                })
            }

        })
    }

    searchEmp = (items, term) => {
        if (!term) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })

    }

    search = (e) => {
        this.setState(() => {
            return {
                term: e.target.value
            }
        })
    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise)
            case 'increase':
                return items.filter(item => item.salary > '5000')
            default:
                return items
        }
    }

    filterBtn = (e) => {

        this.setState(() => {
            return{
                filter: e
            }
        })

    }


    render() {
        let kol = this.state.data.length;
        let increased = this.state.data.filter(item => item.increase).length;
        const {data, term} = this.state;
        const visibleData = this.filterEmp(this.searchEmp(data, term), this.state.filter);
        return (
            <div className="app">
                <AppHeader index={kol} increased={increased}/>

                <div className="search-panel">
                    <SearchPanel search={this.search}/>
                    <AppFilter filterBtn={this.filterBtn}/>
                </div>
                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                />
                <EmployersAdd addItem={this.addItem}/>
            </div>

        )

    }
}


export default App;