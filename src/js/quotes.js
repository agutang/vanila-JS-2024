const quotes = document.querySelector(".quotes");
const quotesArray = [
  "달걀은 유정란이든 동물복지란이든 목초란이든 영양학적으로 유의미한 차이는 없는 것으로 알려져있습니다.",
  "돼지고기에도 등급제가 있습니다.",
  "소고기 등급제의 시행은 호주보다 대한민국이 빨랐습니다.",
  "소에게 목초를 먹여 키우면 지방색이 노래지고 고기의 향이 강해집니다. 이는 한국인의 일반적인 취향과 거리가 멉니다.",
  "한국양토양록농협에서는 토끼고기를 유통하고 있습니다.",
  "생간을 많이 먹으면 비타민 A 중독의 위험이 있기 때문에, 생으로 많이 먹는 것은 권장되지 않습니다.",
  "열빙어는 시샤모가 아닌데 시샤모로 팔려나가고, 열빙어알은 날치알이 아닌데 날치알로 팔려나가기도 합니다.",
  "민물고기 회는 간디스토마 감염 위험이 크기 때문에, 자연산 민물고기는 회로 먹지 않는 것이 좋습니다.",
  "연어는 흰살생선입니다.",
  "주꾸미 볶음을 할 때, 볶기 전에 살짝 데쳐서 사용하면 물이 많이 나오지 않습니다.",
  "여름 무는 맛이 정말 없습니다.",
  "당근은 기름에 조리해야 베타카로틴의 흡수율이 높아집니다.",
  "가지는 데치거나 찌는 것보다 기름에 볶거나 튀겨야 맛있다고 알려져있습니다.",
  "요즘은 트랜스지방이 없는 마가린을 시중에서 구할 수 있습니다.",
  "베이킹을 할 때 버터 대신 마가린을 사용하면, 힘들고 맛도 없습니다.",
];
function randomQuotes() {
  const random = Math.floor(Math.random() * quotesArray.length);
  quotes.innerText = quotesArray[random];
}
randomQuotes();

quotes.addEventListener("click", randomQuotes);
