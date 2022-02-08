import react,{useState} from "react";

function App() {
  const [toDo,setToDo] = useState("")
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // toDo = "" ---> X
    // todo.push(...) ---> X

    setToDo("");
    //state는 항상 새로운 것이여야 한다.
    setToDos(currentArray => [toDo, ...currentArray])
    //첫번재 실행시 "hello" 입력
    // setToDos([] => [toDo, ...[]])
    // setToDos([] => [toDo,])
    // setToDos([] => ["hello"])
    //두번째 실행시 "bye bye" 입력
    // setToDos(["hello"] => [toDo, ...["hello"]])
    // setToDos(["hello"]) => [toDO,"hello"]
    // setToDos(["hello"]) => ["bye bye","hello"]
    console.log("something to do")
    // localStorage.setItem(list,toDo)
  }
  console.log("my todos array",toDos)
  return (
    <div>
      <h1>My to Dos {(toDos.length)}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
