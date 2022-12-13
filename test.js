/** Inheritance **/
class Mother {
  // Mother 부모 클래스
  constructor(name, age, tech) {
    // 부모 클래스 생성자
    this.name = name;
    this.age = age;
    this.tech = tech;
  }
  getTech() {
    return this.tech;
  } // 부모 클래스 getTech 메서드
}

class Child extends Mother {
  // Mother 클래스를 상속받은 Child 자식 클래스
  constructor(name, age, tech) {
    // 자식 클래스 생성자
    super(name, age, tech);
  }
}

const child = new Child('이용우', '28', 'Node.js');
console.log(child.name); // 이용우
console.log(child.age); // 28
console.log(child.getTech()); // 부모 클래스의 getTech 메서드 호출: Node.js
