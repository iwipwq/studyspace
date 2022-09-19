import create from 'zustand';
import logo from './logo.svg';
import './App.css';

const useCounterStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1})),
  dec: () => set((state) => ({count: state.count - 1})),
  reset: () => set({count: 0})
}))

const useDogStore = create(() => ({paw: true, snout: true, fur: true}))

function Counter() {
  const { count, inc, dec, reset } = useCounterStore()
  return(
    <div className='counter'>
      <p>카운터</p>
      <span>{count}</span>
      <button onClick={inc}>+1</button>
      <button onClick={dec}>-1</button>
      <button onClick={reset}>리셋</button>
    </div>
  )
}

function Dogo() {
  const paw1 = useDogStore.getState().paw
  const unsub1 = useDogStore.subscribe(console.log);
  useDogStore.setState({paw: false})

  unsub1()

  const destoryer = function () {
    console.log("des")
    useDogStore.destroy()
    console.log("paw?",useDogStore.getState().paw);
  } 

  const paw = useDogStore((state) =>state.paw)
  return (
    <div>
      <p>{paw.toString()}</p>
      <button onClick={destoryer}>destory and listen</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Zustand
        </p>
        <div className='container'>
        <Counter />
        <Dogo />
        </div>
    </div>
  );
}

export default App;
