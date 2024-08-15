var studentName = "카일";
let studentId = 42;

function hello() {
  console.log(`${self.studentName}님, 안녕하세요!`);
}

self.hello();
// 카일님, 안녕하세요!

self.studentId;
// undefined
