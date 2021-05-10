class MyClass {}

// 1. export default 구문으로 특정 대상 내보내기
// (단, export default는 모듈 내부에서 오직 한 대상에만 적용 가능) - 모아서 default export 추천
export default MyClass
//제일 중요한 거 내보내기

function hello() {
    return "hello"
}
const world = "world"
let variable = 1234
const obj = {}

// 2. export 구문으로 대상 내보내기
// (그 외에는 export로 내보내기 가능) 객체 아니고 문법 
export { hello, world, variable, obj }