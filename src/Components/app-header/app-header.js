import './app-header.css'
function AppHeader(props) {
    const {index, increased} = props;
    return (
     <div className="app-header">
        <h1>Учет сотрудкиков компании NaN</h1>
         <h2>Общее число сотрудников: {index}</h2>
         <h2>Премию получат:{increased} </h2>
     </div>
    );
}
export default AppHeader;