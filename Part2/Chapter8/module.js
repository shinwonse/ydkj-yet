// 클래식 모듈 형식

var Student = (function defineStudent() {
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
})();

Student.getName(73); // Suzy

/**
 * Student는 모듈의 인스턴스가 되었습니다. Student 모듈에는 records 데이터에 접근 가능한 getName()이 포함된
 * 공개 API가 구현되어 있고, 외부에서는 이 API를 통해야 getName()에 접근할 수 있습니다.
 *
 * 모듈 인스턴스는 defineStudent()라는 IIFE가 실행되면서 생성됩니다. IIFE는 내부 함수 getName()을 참조하는
 * 프로퍼티를 가진 publicAPI 객체를 반환합니다.
 *
 * 모듈 인스턴스 외부에 있는 Student.getName()은 공개 API를 통해 노출된 내부 함수를 호출하고, 클로저를 통해 내부
 * 변수 records에 접근합니다.
 *
 * IIFE를 사용하는 것은 프로그램에서 해당모듈 인스턴스 하나만 필요하다는 것을 의미하고
 * 이때 이 단일 인스턴스를 싱글턴이라 부릅니다.
 */
