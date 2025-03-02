import Card ,{CardBody} from "./components/Card";
import List from "./components/List";

function App() {
    const list= ["Tanjiro", "Goku", "Eren"];
    const handleSelect = (elemento:string) => {
        console.log('Imprimiendo', elemento);
    }
    const handleSelect2 = (elemento:string) => {
        console.log('Mostrando', elemento);
    }

    const contenido = list.length ? (
    <List data={list} onSelect={handleSelect}/>    
    ):(
        'sin elementos para mostrar'
      )
    ; 
 return <Card>
            {list.length !== 0 && "mi lista"}
            <CardBody title="Hola mundo" text="El texto"/>
            {contenido}
            <List data={list} onSelect={handleSelect2}/>
        </Card>;
}

export default App;