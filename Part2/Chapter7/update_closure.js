function makeCounter() {
  var count = 0;

  return function getCurrent() {
    count = count + 1;
    return count;
  }
}

var hits = makeCounter();

hits(); // 1
hits(); // 2
hits(); // 3

/**
 * 클로저는 실시간으로 변수 자체에 언제든 접근할 수 있도록 관계를 맺어주는 라이브 링크입니다.
 * 그렇기 때문에 우리는 클로저를 통해 값을 읽는 것뿐만 아니라 수정할 수 있습니다.
 * 
 * 변수 count는 내부 함수 getCurrent() 함수에 의해 클로저로 유지되어 가비지 컬렉션의 대상이 되지 않습니다.
 * hits() 함수를 호출하면 count에 접근해 변수를 업데이트하게 되므로 함수를 호출할 때마다 반환값이 1씩
 * 증가하는 것을 확인할 수 있습니다.
 */