module.exports.getName = getName;

var records = [
  { id: 14, name: 'Kyle', grade: 86 },
  { id: 73, name: 'Suzy', grade: 87 },
  { id: 112, name: 'Frank', grade: 75 },
  { id: 6, name: 'Sarah', grade: 91 },
];

function getName(studentID) {
  var student = records.find((student) => student.id == studentID);
  return student.name;
}

/**
 * CommonJS 모듈은 파일 기반이여서 모듈을 만들 때 별도의 파일을 정의해야 한다는 차이가 있습니다.
 * records와 getName 식별자는 모듈의 최상위 스코프에 있지만 전역 스코프는 아닙니다.
 * 따라서 여기 있는 모든 코드는 기본적으로 바깥 코드에 대해 비공개입니다.
 *
 * CommonJS 모듈에서는 module.exports 객체를 사용해 모듈의 공개 API를 정의합니다.
 * 빈 객체 module.exports에 함수나 변수를 추가하면 모듈 외부에서도 함수, 변수를 사용할 수 있습니다.
 */
