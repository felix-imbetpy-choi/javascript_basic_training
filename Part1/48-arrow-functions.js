'use strict'

// "화살표 함수 다시 살펴보기"
// 화살표 함수는 단순히 함수를 짧게 쓰기 위한 용도로 사용하지 않습니다
// 화살표 함수는 몇가지 유용한 기능을 제공합니다
// JS 를 사용하다 보면 저 멀리 동떨어진 곳에서 실행될 작은 함수를 작성해야 하는 상황을 자주 만나게 됩니다

// arr.forEach(func) – func는 forEach가 호출될 때 배열 arr의 요소 전체를 대상으로 실행됩니다.
// setTimeout(func) – func는 내장 스케줄러에 의해 실행됩니다.

// 이처럼 자바스크립트에선 함수를 생성하고 그 함수를 어딘가에 전달하는 것이 아주 자연스럽습니다.
// 그런데 어딘가에 함수를 전달하게 되면 함수의 컨텍스트를 잃을 수 있습니다. 
// 이럴 때 화살표 함수를 사용하면 현재 컨텍스트를 잃지 않아 편리합니다.




// "화살표 함수에는 'this’가 없습니다"
// 매서드와 this 챕터에서 화살표 함수엔 this 가 없다는 것을 배웠습니다
// 화살표 함수 본문에서 this 에 접근하면 외부에서 값을 가져옵니다
// 이런 특징은 객체의 메서드 안에서 동일 객체의 프로퍼티를 대상으로 순회를 하는 데 사용할 수 있습니다

// 예시의 forEach 에서 화살표 함수를 사용했기 때문에 
// 함수 본문에 있는 this.title 은 화살표 함수 바깥에 있는 메서드인 showList 가 가리키는 대상과 동일해 집니다
// 즉 this.title 은 group.title 과 동일합니다
// 아래 예시에서 일반 함수를 사용하였다면 에러가 발생했습니다 (this 는 함수 안의 값만 사용하기 때문?)
let group = {
    title: "1모둠",
    student: ["보라","준영","시헌"],

    showList(){
        this.student.forEach(
            student => console.log(this.title + ':' + student)
        )
    }
}
group.showList();

// 일반 함수 예시
// 에러는 forEach 에서 전달되는 함수의 this 가 undefined 된 것에 이어서 발생합니다
// this.student 는 undefined 를 발생시키고
// console.log 함수에서 undefined.title 에 접근하려 하자 에러가 출력된 것 입니다
// 그런데 화살표 함수는 this 자체가 없기 때문에 이런 에러가 발생하지 않습니다.
let group2 = {
    title: "1모둠",
    students: ["보라", "호진", "지민"],
  
    showList() {
      this.students.forEach(function(student) {
        // TypeError: Cannot read property 'title' of undefined
        console.log(this.title + ': ' + student)
      });
    }
};

group2.showList();

// 화살표 함수는 new 와 함께 실행할 수 없습니다
// this 가 없기 때문에 화살표 함수는 생성자 함수로 사용할 수 없습니다
// 화살표 함수는 New 와 함께 호출할 수 없습니다

// // 화살표 함수 vs. bind
// 화살표 함수와 일반 함수를 .bind(this) 를 사용해서 호출하는 것 사이에는 미묘한 차이가 있습니다
// bind 는 함수의 한정된 버전을 만들고
// 화살표 함수는 어떤 것도 바인딩 시키지 않습니다 화살표 함수에는 단지 this 가 없을 뿐, 
// 화살표 함수에서 this 를 사용하면 일반 변수 서칭과 마찬가지로 this 의 값을 외부 렉시컬 환경에서 찾습니다




// "화살표 함수엔 'arguments’가 없습니다"
// 화살표 함수는 일반 함수와는 다르게 모든 인수에 접근할 수 있게 해주는 유사 배열 객체 argument 를 지원하지 않습니다
// 이런 특징은 현재 this 값과 argument 정보를 함께 실어 호출을 포워딩 해주는 데코레이터를 만들 때 유용히 사용됩니다




// "요약"
// 화살표 함수가 일반 함수와 다른 점은 다음과 같습니다
// this 를 가지지 않습니다
// argument 를 지원하지 않습니다
// new 와 함께 호출 할 수 없습니다
// 이외에도 화살표 함수는 super 가 없다는 특징도 있는데 아직 super 에 대해서 배우지 않았기 때문에
// 이번 챕터에서는 해당 내용을 다루지 않았습니다 

