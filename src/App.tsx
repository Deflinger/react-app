import Card ,{CardBody} from "./components/Card";
import List from "./components/List";

function App() {
    const list=
    ["Tanjiro",
    "Goku",
    "Eren"];
 return <Card>
            <CardBody title="Hola mundo" text="El texto"/>
            <List data={list}/>
        </Card>;
}

export default App;