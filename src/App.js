import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <div className='Headercss'>
        <div className='Header'>ToDo App</div>
        <div className='footer'></div>
      </div>
      <Todo/>
    </div>
  );
}

export default App;
