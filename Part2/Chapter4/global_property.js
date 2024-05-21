window.something = 42;

let something = "카일";

console.log(something); // 카일

console.log(window.something); // 42

/**
 * let으로 변수 something을 선언하면 전역 변수가 추가되지만 전역 객체의 프로퍼티가 추가되지는 않습니다.
 * 그 영향으로 something 렉시컬 식별자가 something 전역 객체 프로퍼티를 가리게 됩니다.
 * 
 * 전역 객체에 있는 프로퍼티와 전역 스코프에 등록된 식별자가 다르게 작동하도록 코드를 작성하는건 좋지 않습니다.
 * 
 * 전역에 무언가를 선언할 때 실수를 막을 수 있는 좋은 방법은 전역에서는 항상 var를 쓰는 것입니다.
 * let과 const는 블록 스코프에서만 쓰고 말이죠.
 */