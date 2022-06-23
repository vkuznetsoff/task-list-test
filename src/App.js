import logo from './logo.svg';
import './App.css';
import Task from './components/Task/Task';

function App({tasks}) {
  return (
    <div className="App">
     { tasks.map(task => (
       <Task task={task} />
     ))}
     
    </div>
  );
}

export default App;
