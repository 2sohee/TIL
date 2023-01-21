/* 
for 반복문
- 동일한 작업을 여러번 반복한다.
*/

for (let i = 0; i < 10; i++) {
    console.log(i)
}
/*  let i = 0; => 초기값 
 i < 10 => 조건, false가 되면 멈춤  
 i++ => 코드 실행 후 작업
 */

 // while 반복문
let i = 0;

while(i<10){
    console.log(i);
    i++;
}

//do while 반복문
let k = 0;

do{
    k++;
} while (k<10) // while 문과 다른점은 무조건 한번은 실행되는 것 i++가 먼저 실행되기 때문에.

/* 
break - 반복문을 멈추고 빠져나옴
continue - 반복문을 멈추고 다음 반복으로 진행
*/


