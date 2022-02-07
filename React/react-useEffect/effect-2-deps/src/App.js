import { useState, useEffect } from "react";
//useEffect 첫번째 argument 적용할 코드 두번째는 나중에

function App() {
  //특정 코드를 state가 바뀌어도 render되지 않게 만들기
  const [counter,setValue] = useState(0);
  const [keyword,setKeyword] =useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  //아래 코드는 스테이트가 업데이트될때마다 계속 실행됨
  console.log("I run all the time")
  // const iRunOnlyOnce = () => {
  //   console.log("I run only once.")
  // }
  // useEffect((iRunOnlyOnce), []);
  // useEffect가 적용된 요소는 한번만 렌더링 됨
  // input 같은 요소가 값을 계속 업데이트할때 계속렌더링 되는걸 방지해줌
  useEffect(()=>{"I run only ONCE"}, []);
  // console.log("SERACH FOR", keyword);
  // 검색어를 입력하고 버튼을 누르면 counter state가 업데이트 되면서 검색어를 계속 렌더링 하게 됨
  // keyword가 변화할때만(특정부분만) 렌더링되게 하기
  // setEffect의 [] 자리에 변화를 감지해 실행할 state를 추가한다.
  // 이함수는 counter가 변화할때 실행되지 않고 keyword가 변화할때만 실행된다.
  useEffect(()=> {
    if (keyword !=="" && keyword.length > 6){
      console.log("SEARCH FOR", keyword);
    }
  },[keyword])
  useEffect(()=> {
    console.log("I run when 'keyword' changes", keyword);
  },[keyword])
  useEffect(()=> {
    console.log("I run when 'counter' changes", counter);
  },[counter])
  useEffect(()=> {
    console.log("I run when 'counter'&'keyword' changes", counter);
  },[counter,keyword])
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
