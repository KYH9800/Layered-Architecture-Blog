/** Encapsulation **/
class User {
  private name: string;
  private age: number;

  setName(name: string) {
    // Private 속성을 가진 name 변수의 값을 변경합니다.
    this.name = name;
  }
  getName() {
    // Private 속성을 가진 name 변수의 값을 조회합니다.
    return this.name;
  }
  setAge(age: number) {
    // Private 속성을 가진 age 변수의 값을 변경합니다.
    this.age = age;
  }
  getAge() {
    // Private 속성을 가진 age 변수의 값을 조회합니다.
    return this.age;
  }
}

const user = new User(); // user 인스턴스 생성
user.setName('이용우');
user.setAge(28);
console.log(user.getName()); // 이용우
console.log(user.getAge()); // 28
// console.log(user.name); // Error: User클래스의 name 변수는 private로 설정되어 있어 바로 접근할 수 없습니다.

/** Abstraction **/
interface Human {
  name: string;
  setName(name);
  getName();
}

// 인터페이스에서 상속받은 프로퍼티와 메소드는 구현하지 않을 경우 에러가 발생합니다.
class Employee implements Human {
  constructor(public name: string) {}

  // Human 인터페이스에서 상속받은 메소드
  setName(name) {
    this.name = name;
  }

  // Human 인터페이스에서 상속받은 메소드
  getName() {
    return this.name;
  }
}

const employee = new Employee('');
employee.setName('이용우'); // Employee 클래스의 name을 변경하는 setter
console.log(employee.getName()); // Employee 클래스의 name을 조회하는 getter
