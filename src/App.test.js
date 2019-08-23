import React, {useState} from 'react';
import EditinPlace, {TextArea} from './EditinPlace.js';
import './App.css';


function App() {
  const [name, setName] = useState('Luis');
  const [name2, setName2] = useState('Rodrigues');

  return (
    <div className="App">
     <EditinPlace value={name} viewAs="h1" onChangeValue={setName} />
     <TextArea value={name2} viewAs="h1" onChangeValue={setName2} />
     <hr />
     Name: {name}
    </div>
  );
}

export default App;
