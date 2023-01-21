/* 
if문
- 괄호안에 들어가는 조건을 평가해서 true면 실행
- else 절은 if문의 조건이 false면 실행
- else if 절은 정확하게 나이가 19살이면 실행되게 조건을 만든다.
*/
const age = 30; // 나이를 30으로 선언

if(age > 19){
    console.log('환영 합니다.'); //첫 번재 if가 true면 여기가 실행
} else if (age === 19) {
    console.log('수능 잘치세요.') // 첫 번째가 아니고 두 번째 if가 true라면 여기가 실행 
}
else {console.log('안녕히 가세요') // 첫 번째, 두 번째도 아니라면 이 줄이 최종적으로 실행
} 

