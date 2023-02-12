/* 
1. 콜백을 사용했을 때 복잡함을 피하기 위해 ES6부터 등장한 개념
2. 처리에 성공했을 때 실행할 함수(resolve)와 성공하지 못했을 때 실행할 함수(reject)
를 미리 약속하는 것
3. 프로미스는 객체를 생성하는 부분과 소비하는 부분으로 나뉜다.
4. 프로미스는 제작 코드에서 '성공'과 '실패'를 확인한 후 소비 코드로 알려준다.
*/

//객체 생성하는 부분
let likePizza = true; //변수 생성
const pizza = new Promise((resolve, reject) => {
if (likePizza) {
    resolve("피자를 주문합니다."); //likePizza가 true라면 주문을 실행 
} else {
    reject("피자를 주문하지 않습니다.") // true가 아니면 reject를 실행
}
});


/* <소비 코드>
then - 성공했을 때 어떤것을 실행할지 지정
catch - 프로미스에서 실패했을 때 실행할 소스를 지정
finally - 성공과 실패 여부 상관없이 무조건 실행 */

pizza 
.then(result => console.log(result)) 
// 성공했을 때 result를 보여줘라는 뜻, catch와 이어지기 때문에 끝에 세미콜론 붙이면 안됨
.catch(err => console.log(err))
.finally(() => console.log("끝!!"));


