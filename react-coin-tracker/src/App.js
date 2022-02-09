import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  // coins 의 useState를 ()로 놔두면 undefined기 때문에 length를 사용할 경우 err발생
  const [coins, setCoins] = useState([])
  //빈 배열의 useEffect -> uesEffect안의 함수를 한번만 실행
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=USD,BTC")
    .then((response) => response.json())
    // .then((json) => console.log(json));
    .then((json) => {
      setCoins(json);
      setLoading(false);
    })
  },[])
  //json안에 들어있는 id정보를 이용해서 list key값을 넣어주기
  // return (
  //   <div>
  //     <h1>The Coins! ({coins.length})</h1>
  //     {loading ? <strong>Now loading...</strong> : null}
  //     <ul>
  //       {coins.map((item) => (<li key={item.id}>{item.name}({item.symbol}) : {item.quotes.USD.price} USD</li>))}
  //     </ul>
  //   </div>
  // );
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Now loading...</strong> : <select>
        {coins.map((item) => (<option key={item.id}>{item.name}({item.symbol}) : {item.quotes.BTC.price} BTC</option>))}
      </select>}
    </div>
  );
}

export default App;
