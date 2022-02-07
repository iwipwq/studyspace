import { useState, useEffect } from "react";
//useEffect 첫번째 argument 적용할 코드 두번째는 나중에

function App() {
  //특정 코드를 state가 바뀌어도 render되지 않게 만들기
  const [counter,setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  //아래 코드는 스테이트가 업데이트될때마다 계속 실행됨
  console.log("I run all the time")
  // const iRunOnlyOnce = () => {
  //   console.log("I run only once.")
  // }
  // useEffect((iRunOnlyOnce), []);
  useEffect(()=>{"Call the API"}, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
