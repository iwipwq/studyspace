const quotes = [
    {
        quote: " A sure cure for taking a stock for granted is a big drop in the price.",
        author: "Peter Lynch",
    },
    {
        quote: "Know what you own, and know why you own it",
        author: "Peter Lynch",
    },
    {
        quote: "No person can play the market all the time and win. There are times when you should be completely out of the market, for emotional as well as economic reasons.",
        author: "Jesse Lauriston Livermore",
    },
    {
        quote: "응~ 더 폭락해봐 병신아~ 자살하면 그만이야~",
        author: "미국주식마이너갤러리",
    },
    {
        quote: "I spend about fifteen minutes a yaer on economic analysis.",
        author: "Jesse Lauriston Livermore",
    },
    {
        quote: "Investing is fun and exciting, but dangerous if you don't do any work.",
        author: "Peter Lynch",
    },
    {
        quote: "나는 무적이다. 나스닥은 '신'이고",
        author: "해외주식마이너갤러리",
    },
    {
        quote: "If you can’t sleep at night because of your stock market position, then you have gone too far. If this is the case, then sell your position down to the sleeping level.",
        author: "Jesse Lauriston Livermore",
    },
    {
        quote: "'위기'를 거꾸로해보세요. '기위'...아무말도 안됩니다. 탈출하세요",
        author: "Peter Lynch",
    },
    {
        quote: "뭐라도하겟지 회산데",
        author: "해외주식마이너갤러리",
    },
    {
        quote: "성공적인 투자의 비밀은 오직 리스크관리에 있다.",
        author: "주식투자절대원칙 - brent penfold",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;