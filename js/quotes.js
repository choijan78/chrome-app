const quotes = [
  {
    quote: "도 : 태평성대를 이끈 옛 성인들의 통치이념",
    author: "논어",
  },
  {
    quote: "군자 : 도를 배우고 부단히 노력하여 실천하는 올바른 지도자",
    author: "논어",
  },
  {
    quote:
      "군자는 남에게 보여주려고 하는 것이 아니라 자신을 위해서 삼가여 부단히 도를 닦는 것이니, 남들이 알아주지 않아도 화를 내거나 속상해하지 않는 것이 참된 지도자다.",
    author: "공자",
  },
  {
    quote:
      "부모에게 효도하고 윗사람을 공경하는 것이, 바로 어질음의 기초이자 출발점인 것이다.",
    author: "유자",
  },
  {
    quote: "어질음 : 사회에 나아가 자신의 군주를 신짐으로 섬기고 따르는 것",
    author: "논어",
  },
  {
    quote:
      "제후의 나라를 다스리는 지도자는 겸손함과 신중함으로 나라를 다스리고, 나아가 검소한 생활을 실천함으로써 백성에게 맏음을 주어야 한다.",
    author: "공자",
  },
  {
    quote:
      "수신제가치국평천하 : 작은 개인과 집안에서 큰 나라와 온 세상으로 확대시켜나가야 한다",
    author: "논어",
  },
  {
    quote:
      "예를 행한다는 것은 희로애락의 조화로움을 중시하는 것이다. 감정을 있는 그대로 표출하는 것이 아니라 절도에 맞게 조절 하여 표현하는 것이다.",
    author: "유자",
  },
  {
    quote:
      "의로움 : 상하의 서열을 명확하게 바로 잡는 것이 옳다고 여기고, 이를 위해서 목숨을 걸 수 있는 자세",
    author: "유자",
  },
  {
    quote:
      "군자라고 할지라도 신중하지 못하여 경거망동하면 높고 엄숙함을 잃어 신임을 잃게 되고 도를 배워도 결국, 자기의 것으로 만들어 실천할 수 없게된다.",
    author: "공자",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
