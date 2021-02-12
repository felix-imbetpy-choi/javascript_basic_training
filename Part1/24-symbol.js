'use stricrt'






// "요약"
// Symbol은 원시형 데이터로, 유일무이한 식별자를 만드는 데 사용됩니다.
// Symbol()을 호출하면 심볼을 만들 수 있습니다. 설명(이름)은 선택적으로 추가할 수 있습니다.
// 심볼은 이름이 같더라도 값이 항상 다릅니다. 이름이 같을 때 값도 같길 원한다면 전역 레지스트리를 사용해야 합니다. Symbol.for(key)는 key라는 이름을 가진 전역 심볼을 반환합니다. key라는 이름을 가진 전역 심볼이 없으면 새로운 전역 심볼을 만들어줍니다. key가 같다면 Symbol.for는 어디서 호출하든 상관없이 항상 같은 심볼을 반환해 줍니다.
// 심볼의 주요 유스 케이스는 다음과 같습니다.
// 객체의 ‘숨김’ 프로퍼티 – 외부 스크립트나 라이브러리에 ‘속한’ 객체에 새로운 프로퍼티를 추가해 주고 싶다면 심볼을 만들고, 이를 프로퍼티 키로 사용하면 됩니다. 키가 심볼인 경우엔 for..in의 대상이 되지 않아서 의도치 않게 프로퍼티가 수정되는 것을 예방할 수 있습니다. 외부 스크립트나 라이브러리는 심볼 정보를 갖고 있지 않아서 프로퍼티에 직접 접근하는 것도 불가능합니다. 심볼형 키를 사용하면 프로퍼티가 우연히라도 사용되거나 덮어씌워 지는 걸 예방할 수 있습니다.
// 이런 특징을 이용하면 원하는 것을 객체 안에 ‘은밀하게’ 숨길 수 있습니다. 외부 스크립트에선 우리가 숨긴 것을 절대 볼 수 없습니다.
// 자바스크립트 내부에서 사용되는 시스템 심볼은 Symbol.*로 접근할 수 있습니다. 시스템 심볼을 이용하면 내장 메서드 등의 기본 동작을 입맛대로 변경할 수 있습니다. iterable 객체에선 Symbol.iterator를, 객체를 원시형으로 변환하기에선 Symbol.toPrimitive이 어떻게 사용되는지 알아보겠습니다.
// 사실 심볼을 완전히 숨길 방법은 없습니다. 내장 메서드 Object.getOwnPropertySymbols(obj)를 사용하면 모든 심볼을 볼 수 있고, 메서드 Reflect.ownKeys(obj)는 심볼형 키를 포함한 객체의 모든 키를 반환해줍니다. 그런데 대부분의 라이브러리, 내장 함수 등은 이런 메서드를 사용하지 않습니다.

