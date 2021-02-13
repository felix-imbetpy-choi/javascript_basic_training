'use strict'


// "원시값의 메서드"
// 자바스크립트는 원시값(문자열, 숫자) 을 마치 객체처럼 다룰 수 있게 해줍니다
// 원시값에도 객체에서 처럼 메서드를 호출할 수 있죠
// 원시값의 메서드에 대해선 곧 학습할 예정인데 그 전에 원시값은 객체가 아니라는 것을 기억합시다
// 원시값은 객체와 다음과 같은 차이점이 있습니다.객체처럼

// 원시형의 종류는 문자(string), 숫자(number), bigint, 불린(boolean), 심볼(symbol), null, undefined형으로 총 일곱 가지 입니다.

// 객체 : 프로퍼티에 다양한 종류의 값을 저장할 수 있습니다.
// {name : "John", age : 30}와 같이 대괄호 {}를 사용해 만들 수 있습니다. 
// 자바스크립트에는 여러 종류의 객체가 있는데, 함수도 객체의 일종입니다.
// 객체의 장점 중 하나는 함수를 프로퍼티로 저장할 수 있다는 것입니다.
// 자바스크립트는 날짜, 오류, HTML 요소(HTML element) 등을 다룰 수 있게 해주는 다양한 내장 객체를 제공합니다. 이 객체들은 고유한 프로퍼티와 메서드를 가집니다.
// 하지만, 이런 기능을 사용하면 시스템 자원이 많이 소모된다는 단점이 있습니다.
// 객체는 원시값보다 “무겁고”, 내부 구조를 유지하기 위해 추가 자원을 사용하기 때문입니다.
let john = {
    name: "John",
    sayHi: function() {
        console.log("친구야 반갑다!");
    }
};
john.sayHi(); // 친구야 반갑다!



// "원시값을 객체처럼 사용하기"
// 문자열 str은 원시값이므로 원시값의 프로퍼티(toUpperCase)에 접근하는 순간 특별한 객체가 만들어집니다.
// 이 객체는 문자열의 값을 알고 있고, toUpperCase()와 같은 유용한 메서드를 가지고 있습니다.
// 메서드가 실행되고, 새로운 문자열이 반환됩니다(alert 창에 이 문자열이 출력됩니다).
// 특별한 객체는 파괴되고, 원시값 str만 남습니다.
let str = "Hello";
console.log( str.toUpperCase() ); // HELLO

// 숫자형도 고유한 메서드를 지원합니다. 메서드 toFixed(n)를 이용하면 원하는 자리에서 소수점 아래 숫자를 반올림할 수 있습니다.
let n = 1.23456;
console.log( n.toFixed(2) ); // 1.23

// String/Number/Boolean를 생성자론 쓰지 맙시다.
// Java 등의 몇몇 언어에선 new Number(1) 또는 new Boolean(false)와 같은 문법을 사용해 
// 원하는 타입의 "래퍼 객체"를 직접 만들 수 있습니다.
// 자바스크립트에서도 하위 호환성을 위해 이 기능을 남겨 두었는데, 이런 식으로 래퍼 객체를 만드는 건 추천하지 않습니다. 
// 몇몇 상황에서 혼동을 불러일으키기 때문입니다.
// 객체는 논리 평가 시 항상 참을 반환하기 때문에, 아래 예시에서 얼럿창은 무조건 열립니다.
console.log( typeof 0 ); // "number"
console.log( typeof new Number(0) ); // "object"!

let zero = new Number(0);
if (zero) { // 변수 zero는 객체이므로, 조건문이 참이 됩니다.
    console.log( "그런데 여러분은 zero가 참이라는 것에 동의하시나요!?!" );
}

// 그런데, new를 붙이지 않고 String / Number / Boolean을 사용하는 건 괜찮습니다. 
// new 없이 사용하면 상식에 맞게 인수를 원하는 형의 원시값(문자열, 숫자, 불린 값)으로 바꿔줍니다. 아주 유용하죠.
let num = Number("123"); // 문자열을 숫자로 바꿔줌

// null/undefined는 메서드가 없습니다.
// 특수 자료형인 null과 undefined의 원시값(null/undefined)은 위와 같은 법칙을 따르지 않습니다. 
// 이 자료형과 연관되는 "래퍼 객체"도 없고, 메서드도 제공하지 않습니다. 
// 어떤 의미에서는 두 자료형이 "가장 원시적"이라 할 수 있을 것 같습니다.


// (*)로 표시한 줄에서 무슨 일이 일어나는지 알아보면서, 왜 위와 같은 결과가 나타나는지 이해해 봅시다.
// str의 프로퍼티에 접근하려 하면 "래퍼 객체"가 만들어집니다.
// 엄격 모드에선 래퍼 객체를 수정하려 할 때 에러가 발생합니다.
// 비 엄격 모드에선 에러가 발생하지 않습니다. 래퍼 객체에 프로퍼티 test가 추가되죠. 
// 그런데 래퍼 객체는 바로 삭제되기 때문에 마지막 줄이 실행될 땐 프로퍼티 test를 찾을 수 없습니다.
// 위 예시를 통해 원시값과 객체는 다르다는 것을 다시 한번 확인해 보았습니다.
let str = "Hello";
str.test = 5; // (*)
console.log(str.test);





