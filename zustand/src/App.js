import create from 'zustand/react';
import logo from './logo.svg';
import './App.css';

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1})),
}))

function Counter() {
  const { count, inc } = useStore()
  return(
    <div className='counter'>
      <span>{count}</span>
      <button onClick={inc}>+1</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className='container'>
        <Counter />
      </div>
    </div>
  );
}

export default App;
