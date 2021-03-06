"use strict"
// 엄격 모드가 작동

const user = {
    func() { console.log('this :', this) }
}
const another = { name: 'another' }

// 함수 호출 시점에 메소드를 호출하는 주체에 따라서 this 값 바인딩
// 여기서는 user 객체가 this 값으로 바인딩 됨
user.func() // this : user 객체
//출력 : this : { func: [Function: func] }

// '.' 왼쪽에 있는 것이 this를 호출한 객체 !

const f = user.func
// 이 시점에서는 호출하는 주체가 없으므로 this는 undefined (엄격 모드가 아니라면 글로벌 객체)
f() // this : undefined --> 대입을 해야 null, 아예 대입하지 않으면 undefined
// 주체가 없으므로 undefined
// 엄격 모드가 아니면 [global] 객체

another.f = user.func
// 호출하는 주체가 another 객체로 바뀌었으므로 여기서는 another 객체가 this 값으로 바인딩 됨
another.f() // this : another 객체

// bind는 결속
// bind 메소드 바인딩을 통해 명시적으로 user 객체가 this 값으로 바인딩되도록 설정
const binded = user.func.bind(user) //한번 bind한 객체는 바꿀 수 없다. this를 직접 결정한다. 누가 호출하던 user가 this.
// 비록 호출하는 주체는 없지만 앞서 명시적으로 this 바인딩을 수행했으므로 this는 user
binded() // this : user 객체