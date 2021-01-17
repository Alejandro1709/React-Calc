import Screen from './components/Screen';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Screen
          theme="#24242e"
          statusColor="white"
          controlBg="#2b2e37"
          buttonsHolder="#272C34"
        />
        <Screen
          theme="white"
          statusColor="black"
          controlBg="#f9f9f9"
          buttonsHolder="#F8F8F8"
        />
      </div>
    </div>
  );
}

export default App;
