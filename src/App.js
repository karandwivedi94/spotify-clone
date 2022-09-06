import logo from './logo.svg';
import './App.css';
import { LeftDisplay } from './components/LeftDisplay';
import { MainDisplay } from './components/MainDisplay';
import { RightDisplay } from './components/RightDisplay';

function App() {
  return (
    <div className="App">
      <LeftDisplay/>
      <MainDisplay />
      <RightDisplay /> 

      <div className = "background"></div>
    </div>
  );
}

export default App;
