var factorial = (function hideTheCache() {
  var cache = {};

  function factorial(x) {
    if (x < 2) return 1;
    if (!(x in cache)) {
      cache[x] = x * factorial(x - 1);
    }
    return cache[x];
  }

  return factorial;
})();

/**
 * POLE 원칙을 지키기 위해서 변수나 함수를 숨겨야 하는 상황이 생기면
 * 특이한 이름을 가진 함수를 정의하는 것보다 함수 표현식을 사용하는 게 더 나은 해결책이 될 수 있습니다.
 *
 * hideTheCache는 함수 선언이 아닌 함수 표현식으로 정의했으므로 이름은 외부/전역 스코프가 아닌
 * 자체 스코프(cache와 같은 스코프)에 존재하게 됩니다.
 *
 * 이렇게 하면 함수 표현식에 동일한 이름을 지정할 수 있고 충돌이 발생하지 않습니다.
 * 더 나아가 숨기려는 것에 따라 이름을 적절히 지어 지정할 수도 있습니다.
 * 어떤 이름이든 프로그램 내부의 다른 함수 표현식과 충돌하지 않을까 걱정하지 않아도 됩니다.
 */
