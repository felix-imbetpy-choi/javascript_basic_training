'use strict'


// "참조에 의한 객체 복사"
// 객체와 원시 타입의 근본적인 차이 중 하나는 객체는 ‘참조에 의해(by reference)’ 저장되고 복사된다는 것입니다.
// 원시값(문자열, 숫자, 불린 값)은 ‘값 그대로’ 저장·할당되고 복사되는 반면에 말이죠.
// 변수엔 객체가 그대로 저장되는 것이 아니라, 객체가 저장되어있는 '메모리 주소’인 객체에 대한 '참조 값’이 저장됩니다.
// 변수는 두 개이지만 각 변수엔 동일 객체에 대한 참조 값이 저장되죠.
let user = { name: "John" };
let admin = user; // 참조값을 복사함

//따라서 객체에 접근하거나 객체를 조작할 땐 여러 변수를 사용할 수 있습니다.
let user2 = { name: 'John' };
let admin = user2;
admin.name = 'Pete'; // 'admin' 참조 값에 의해 변경됨
console.log();(user2.name); // 'Pete'가 출력됨. 'user' 참조 값을 이용해 변경사항을 확인함

//객체 비교 시 동등 연산자 ==와 일치 연산자 ===는 동일하게 동작합니다.
let a = {};
let b = a; // 참조에 의한 복사
console.log( a == b ); // true, 두 변수는 같은 객체를 참조합니다.
console.log( a === b ); // true

// 다른 예시를 살펴봅시다. 두 객체 모두 비어있다는 점에서 같아 보이지만, 
// 독립된 객체이기 때문에 일치·동등 비교하면 거짓이 반환됩니다.
let c = {};
let d = {}; // 독립된 두 객체
alert( c == d ); // false


// "객체 복사, 병합과 Object.assign"
// Object.assign(dest, [src1, src2, src3...])
// assign 메서드를 사용해 여러 객체를 하나로 병합하는 예시를 살펴봅시다.



// "중첩 객체 복사"



