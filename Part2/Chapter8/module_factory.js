function defineStudent() {
  var records = [
    { id: 14, name: 'Kyle', grade: 86 },
    { id: 73, name: 'Suzy', grade: 87 },
    { id: 112, name: 'Frank', grade: 75 },
    { id: 6, name: 'Sarah', grade: 91 },
  ];

  var publicAPI = {
    getName,
  };

  function getName(studentID) {
    var student = records.find((student) => student.id == studentID);
    return student.name;
  }
}

var fullTime = defineStudent();
fullTime.getName(73); // Suzy

/**
 * defineStudent()는 Student 모듈의 인스턴스를 생성하는 팩토리 함수입니다. 이 팩토리 함수는 IIFE 대신에
 * 외부에서 호출할 수 있습니다. 이 팩토리 함수는 새로운 모듈 인스턴스를 생성하고 반환합니다.
 *
 * 각 모듈 인스턴스는 자체 내부 스코프와 클로저를 형성하는데, 이 클로저 때문에
 * getName() 함수는 records를 감싸고 접근할 수 있습니다.
 */
