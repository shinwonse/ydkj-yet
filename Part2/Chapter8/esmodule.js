export { getName };

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

/////////////////////////////////

export function getName(studentID) {
  var student = records.find((student) => student.id == studentID);
  return student.name;
}

/**
 *  function 앞에 export 키워드가 있지만 여전히 함수 선언문이라서 getName은 함수 호이스팅 규칙을
 *  적용받기 때문에 모듈 전체 스코프에서 사용할 수 있습니다.
 */
