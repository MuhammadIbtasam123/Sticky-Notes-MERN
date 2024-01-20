import './App.css';
import React from 'react';
import Notes from './components/Notes';
import axios from 'axios';

function App() {
  const [notes, setNotes] = React.useState([]);
  const getNotes = async () => {
    const response = await axios.get("http://localhost:3001/posts");
    setNotes(response.data);
  }

  React.useEffect(() => {
    getNotes();
  },[])


  return (
    <div className="App">
      <Notes notes={notes}/>
    </div> 
  );
}

export default App;
