const quotes = [
    {
      quote: "꿈이 있다면 그 꿈을 잡고 절대 놓아주지마라.",
      author: "캐럴 버넷",
    },
    {
      quote: "미래는 현재 우리가 무엇을 하는가에 달려 있다.",
      author: "마하트마 간디",
    },
    {
      quote: "미래를 예측하는 최선의 방법은 미래를 창조하는 것이다.",
      author: "앨런 케이",
    },
    {
      quote: "가장 큰 영광은 한 번도 실패하지 않음이 아니라,실패할 때마다 다시 일어서는데에 있다.",
      author: "공자",
    },
    {
      quote: "동기부여가 당신을 시작하게 한다.습관이 당신을 계속 움직이게 한다.",
      author: "크리스 그로서",
    },
    {
      quote: "희망이 있는 곳에는 반드시 시련이 있는 법이다.",
      author: "무라카미 하루키",
    },
    {
      quote: "인생이란 자신을 찾는 것이 아니라 자신을 만드는 것이다.",
      author: "롤리 다스",
    },
    {
      quote: "실패에서부터 성공을 만들어 내라.좌절과 실패는 성공으로 가는 가장 확실한 디딤돌이다.",
      author: "데일 카네기",
    },
    {
      quote: "우리는 우리가 늘 생각하는것이 된다.그것이 가장 묘한 비밀이다.",
      author: "얼 나이팅게일",
    },
    {
      quote: "모든 성취의 시작점은 갈망이다.",
      author: "나폴레온 힐",
    },
  ];
function handleHover(){
  author.classList.remove("hidden");
  quote.style.margin="20px"
  bigQuote.style.padding="10px"
}
function handleNotHover(){
  author.classList.add("hidden");
  quote.style.margin="10px"
  bigQuote.style.padding="0px"
}
const bigQuote=document.querySelector("#quote");
const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");
const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerHTML=todaysQuote.quote;
author.innerHTML=todaysQuote.author;
bigQuote.addEventListener("mouseover",handleHover);
bigQuote.addEventListener("mouseout",handleNotHover);