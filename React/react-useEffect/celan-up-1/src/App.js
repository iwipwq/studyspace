import { useState, useEffect } from "react";
//useEffect 첫번째 argument 적용할 코드 두번째는 나중에

function Hello() {
  function byeFn() {
    console.log("destroyed bye");
  }
  function hiFn() {
    console.log("create Hi");
    return byeFn;
  }

  //component가 만들어질때도 함수를 실행시킬수 있지만 (useEffect)
  //component를 없앨때도 함수를 실행 시킬 수 있다. (clean-up function)
  //useEffect가 적용된 함수안에 return값으로 실행하고싶은 함수를 넣어주면 된다.
  // ()붙이면 같이 실행되버리니 ()를 빼야함 
  // ex) component가 사라질때 분석결과를 보내주고 싶다.
  // eventListener를 지우거나 console.log를 보여줄때
  // useEffect(() => {
  //   console.log("I'm here. created");
  //   return () => console.log("destoryed")
  // },[])
  useEffect(hiFn,[]);
  return <h1>Hello</h1>
}

function App() {
  const [showing,setShowing] = useState(false);
  const onClick = () => setShowing((prev)=>!prev)
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
