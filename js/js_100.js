function quize01() {
    // 다음 배열에서 400, 500를 삭제하는 code를 입력하세요
    var nums = [100, 200, 300, 400, 500];

    nums.splice(3, 4);

    console.log(nums)
}

function quize02() {
    // pass 부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요

    var arr = [200, 100, 300];
    //pass
    arr.splice(1, 0, "splice(배열의 요소가 추가 될 위치, 기존 배열을 다시 담는 위치값 : 0일 경우 기존배열 삭제하지 않고 요소를 지정 위치에 추가");  
    console.log(arr)
}

function quize03(){
    //다음 출력 값으로 올바른 것은?
    var arr = ["100", 200, 300];
    for(var i = 0; i < arr.length; i++){
        console.log(typeof(arr));   
    }
    // 공돌이들은 책 내면 안된다 ㄹㅇ 문제가 싹 다 개노잼이네
}

function quize04(){
    /*
        다음 변수 a를 `typeof(a)`로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?

        1)  입력 : a =1,   출력 : number

        2)  입력 : a = 2.22,   출력 : boolean

        3)  입력 : a = 'p',   출력 : string

        4)  입력 : a = [1, 2, 3],   출력 : object

        2번
    */
}

function quize05() {
    // 다음 코드의 출력 값으로 알맞은 것은?
    var a = 10;
    var b = 2;

    for(var i=1; i<5; i+=2){
        // i는 1; i는 5보다 작다; i는 for문을 한 번 순환 할 때 마다 2씩 증가한다
        a += i;
        // a는 i만큼 커진다
        // a(10) + i(1)
        // a(11) + i(3)
        console.log(a+b);
        // a(11) + b(2)
        // a(14) + b(2)
    }

}

function quize06(){
    /*다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
        앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.

        1)  NaN
        2)  1
        3)  ""
        4)  0
        5)  undefined 
        
        정답 - 2번
        */        
}

function quize07(){
    /*
    다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

    1)  age
    2)  Age
    3)  let
    4)  _age
    5)   1age

    정답 - 3, 5
    */
}

function quize08(){
    /*자바스크립트 객체를 다음과 같이 만들었다. 
        출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. ) */

    var d = {
        'height':180,
        'weight':78,
        'weight':84,
        'temperature':36,
        'eyesight':1
    };
    
    console.log(d['weight']); // 84
}

function quize09() {
    var year = '2019';
    var month = '04';
    var day = '26';
    var hour = '11';
    var minute = '34';
    var second = '27';

    var result = `${year}/${month}/${day} ${hour}:${minute}:${second}`
    //var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);
    // 그냥 백틱 쓰면 안돼요..?
    console.log(result);    
}

function quize10(){
    const n = prompt('숫자를 입력하세요.');
    let tree = '';
    
    for(let i=1; i<=n; i++){
      let star = '';
      for(let j=1; j<=n-i; j++){
        star += ' ';
      }
      for(let k=1; k<=2*i-1; k++){
        star += '⭐';
      }
      tree += star + '\n';
    }
    
    console.log(tree);
}

quize01()
quize02()
quize03()
quize05()
quize09()
quize10()