var studentName = "카일";

function hello() {
  console.log(`${studentName}님 안녕하세요!`);
}

window.hello();
// 카일님 안녕하세요!

/**
 * 식별자 studentName과 hello가 전역 스코프에 선언됩니다.
 * 식별자가 전역 스코프에 선언된다는 말은 전역 객체(브라우저에서는 대개 window 객체)의 프로퍼티를 통해
 * 해당 식별자에 접근할 수 있다는 말과 같습니다.
 */