greeting();
// TypeError: greeting is not a function

var greeting = function greeting() {
  console.log('안녕하세요!');
}

/**
 * 첫 번째 줄 greeting(); 에서 발생되는 오류를 살펴볼 필요가 있습니다.
 * TypeError는 허용되지 않은 값을 가지고 무언가를 하려고 할 때 발생하는 오류입니다. 일반적인 생각이라면
 * 스코프 내 greeting이라는 식별자를 찾지 못했다는 걸 나타내기 위해 ReferenceError가 발생했어야 하는데 그렇지 않고
 * JS 엔진은 greeting은 찾았지만, 그 순간에 greeting에 함수 참조가 없다고 이야기합니다.
 * 호출 가능한 것은 함수뿐인데 함수가 아닌 값을 호출하려 해서 오류가 발생한 거죠.
 *
 * var로 선언한 변수는 호이스팅도 되고 여기에 더해 스코프가 시작될 때 undefined로 자동 초기화됩니다. 이런 이유 때문에
 * 네 번째 줄에 있는 함수 참조 할당이 실행되기 전까지, 첫 번째 줄에 있는 greeting은 기본값인 undefined로 남아 있는 겁니다.
 */
