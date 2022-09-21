import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import shallow from 'zustand/shallow'
import logo from "./logo.svg";
import "./App.css";

const useCounterStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

const useDogStore = create(() => ({
  paw: true,
  snout: true,
  fur: true,
  bark: "woof",
}));

const usePizzaStore = create(
  subscribeWithSelector(() => ({
    pineapple: true,
    bacon: true,
    mushroom: true,
  }))
);

const listenSelectedChanges = function () {
  usePizzaStore.subscribe((state) => state.pineapple, console.log);
};

const exposePreviousValue = function () {
  usePizzaStore.subscribe(
    (state) => state.pineapple,
    (pineapple, previousPineapple) => console.log(pineapple, previousPineapple)
  );
};

const optionalEqualityFunction = function () {
  usePizzaStore.subscribe(
    (state) => [state.pineapple, state.bacon],
    console.log,
    { equalityFn: shallow }
  );
};

const subscribeAndFireImmediately = function () {
  usePizzaStore.subscribe((state) => state.pineapple, console.log, {
    fireImmediately: true,
  });
};

function Counter() {
  const { count, inc, dec, reset } = useCounterStore();
  return (
    <div className="counter">
      <p>카운터</p>
      <span>{count}</span>
      <button onClick={inc}>+1</button>
      <button onClick={dec}>-1</button>
      <button onClick={reset}>리셋</button>
    </div>
  );
}

function Dogo() {
  const paw1 = useDogStore.getState().paw;
  const unsub1 = useDogStore.subscribe(console.log);

  const setPawToFalse = function () {
    useDogStore.setState({ paw: false });
  };

  const setPawToTrue = function () {
    useDogStore.setState({ paw: true });
  };

  unsub1();

  const destoryer = function () {
    console.log("des");
    useDogStore.destroy();
    console.log("paw?", useDogStore.getState().paw);
  };

  const subscriber = function () {
    console.log("sub");
    useDogStore.subscribe(console.log);
  };

  const getDogState = function () {
    console.log("state", useDogStore.getState());
  };

  const paw = useDogStore((state) => state.paw);
  return (
    <div>
      <p>{paw.toString()}</p>
      <button onClick={getDogState}>get State</button>
      <button onClick={destoryer}>destory state listener</button>
      <button onClick={subscriber}>subscribe state</button>
      <button onClick={setPawToFalse}>Paw to False</button>
      <button onClick={setPawToTrue}>Paw to True</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Zustand</p>
      <div className="container">
        <Counter />
        <Dogo />
      </div>
    </div>
  );
}

export default App;
