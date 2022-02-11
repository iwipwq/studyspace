import { useEffect, useState } from "react";

function SelectCurrency ({coins}) {
  console.log("In selectCurrency function",coins);
  const [currentCurrency,setCurrentCurrency] = useState('USD');
  const handleCurrency = (event) => {
    setCurrentCurrency(event.target.value);
  }
  return (
    <div>
      <select onChange={handleCurrency}>
        {coins.map((item) => (<option key={item.id} value={item.symbol}>{item.name} ({item.symbol})</option>))}
      </select>
      <SelectTicker coins={coins} currentCurrency={currentCurrency} />
      <HowMuchCanIBuy coins={coins}/>
    </div>
  );
}

function SelectTicker({coins,currentCurrency}) {
  console.log("In SelectTicker function",coins)
  console.log("currentCurrency",currentCurrency);
  console.log("type of currentCurrency",typeof(currentCurrency));
  console.log(coins[0].quotes[currentCurrency].price);
  return (
    <select>
      {coins.map((item) => (<option key={item.id}>{item.name}({item.symbol}) : {item.quotes[currentCurrency].price} {currentCurrency}</option>))}
    </select>
  )
}

function HowMuchCanIBuy({coins}) {
  const [amount,setAmount] = useState("0")
  const handleAmount = (event) => {
    setAmount(event.target.value)
  }
  return (
    <section>
      <h2>Find out how much you can buy.</h2>
      <lable htmlFor="amount-input-field">Enter your amount here.</lable>
      <input onChange={handleAmount} value={amount} min="0" type="number" placeholder="Enter your amount here" className="amount-input-field"/>
      <p>You can buy {amount/coins[0].quotes.USD.price} BTC in {amount} USD</p>
    </section>
  )
}

function Test() {
  const [loading, setLoading] = useState(true);
  // coins 의 useState를 ()로 놔두면 undefined기 때문에 length를 사용할 경우 err발생
  const [coins, setCoins] = useState([])
  //빈 배열의 useEffect -> uesEffect안의 함수를 한번만 실행
  useEffect(() => {
    console.log("fecthed")
    fetch("https://api.coinpaprika.com/v1/tickers?quotes=USD,BTC,ETH")
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
      {loading ? <strong>Now loading...</strong> : <SelectCurrency coins={coins}/>}
    </div>
  );
}

export default Test;
