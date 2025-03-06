import { useState } from "react";
import Button from "./components/Button/Index";
import Card ,{CardBody} from "./components/Card";
import List from './components/List';

function App() {
   
    const [data,setData]=useState(["Tanjiro", "Goku", "Eren"]);
   
/*
    const [isLoading, setisLoading]=useState(false); 
    const handleClick= () => setisLoading(!isLoading);
    //estableciendo el estado del boton 

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
            <Button isLoading={isLoading} onClick={handleClick} >
                Hola mundo
            </Button>
        </Card>;
*/
    const addMinion = () => setData([... data,"Minion"]);
    const delMinion = () => setData(data.slice(0,-1));
return <Card>
    <Button isLoading={true} onClick={addMinion}>Agregar</Button>
    <Button isLoading={false} onClick={delMinion}>Eliminar</Button>
    <List data={data }/>
    Hola Mundo
    </Card>;

}

export default App;