var Student = {
  records: [
    { id: 14, name: 'Kyle', grade: 86 },
    { id: 73, name: 'Suzy', grade: 87 },
    { id: 112, name: 'Frank', grade: 75 },
    { id: 6, name: 'Sarah', grade: 91 },
  ],
  getName(studentID) {
    var student = this.records.find((student) => student.id == studentID);
    return student.name;
  },
};

Student.getName(73); // Suzy

// 데이터와 상태를 가진 함수를 하나로 묶는다 하더라도 데이터의 가시성을 제한하지 않는다면
// POLE(최소 노출 원칙) 관점에서 캡슐화가 아닙니다. 이런 경우는 모듈이라는 이름이 적절치 않습니다.

// 데이터와 함수를 모아놓았다는 측면에서 Student는 캡슐화와 관련이 있지만
// 가시성 통제 측면에서는 그렇지 않습니다.
// 이런 경우는 데이터 구조의 인스턴스라는 이름을 붙이는 게 좋습니다.
