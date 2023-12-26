const _type_answer = $('#type_answer');
const _input_answer = document.querySelector('.q_answer_type_box input');

const _equals = document.createElement('p');
_equals.innerHTML = `<p id="equals">=</p>`;

const _input = document.createElement('input');
_input.innerHTML = `<input type="text" id="type_answer_input">`;

let _ans_value = 0;

// 게임 유형 선택
function startBtnClick (_box) {
    let _tit_control = $(_box.currentTarget).attr('aria-controls');
    let _titBox = $('#'+ _tit_control);
    
    $('.q_choice_btn_wrap').addClass('hide');
    $('#'+_tit_control).removeClass('hide');

    if(_tit_control != null || _tit_control != undefined){
        startBtnClick(_titBox)
        let _gameName = $('#' + _tit_control).attr('data-game-name');

        gameStart(_gameName);

    }else{
        return false;
    }
}

function gameStart(g) {
    // 기호 배열
    const _sign = 
    [
        {sign : '+', name : 'plus', value : "+"},
        {sign : '-', name : 'minus', value : "-"},
        {sign : '×', name : 'multiplied', value : "*"},
        {sign : '÷', name : 'divied', value : "/"}
    ]
    // 연산에 사용 될 숫자 갯수 생성
    let _ans = Math.floor((Math.random() * 4) + 2);
    console.log(_ans)
    //연산에 사용 될 기호 출력하기
    for(var i = 0; i < _ans; i++){

        // 숫자 만들기
        let _callNum = Math.floor(Math.random() * 99 + 2);
        // 연산에 사용 될 기호 호출을 위한 math random
        let _callSign = Math.floor(Math.random() * (_ans - 1) );
        // 곱하기 또는 나누기일 시 한자리 숫자로 재생성
        if($(_type_answer).find('p:last-child').hasClass(_sign[2].name) || $(_type_answer).find('p:last-child').hasClass(_sign[3].name)){_callNum = Math.floor(Math.random() * 9);}

        // 숫자 출력
        let _num = document.createElement('p');
        // 기호 출력
        let _signPrint = document.createElement('p');    

        _num.innerHTML = `<p class="number">${_callNum}</p>`;
        
        $(_type_answer).append(_num);
        
        // 숫자 모두 호출 시 for문 종료
        // _ans_value = Number(Number(_ans_value) + _sign[_callSign].value + Number(_callNum));

        // 결과값 계산
        if(_sign[_callSign].name === 'plus'){_ans_value = Number(Number(_ans_value) + Number(_callNum));}
        if(_sign[_callSign].name === 'minus'){_ans_value = Number(Number(_ans_value) - Number(_callNum));}
        if(_sign[_callSign].name === 'multiplied'){_ans_value = Number(Number(_ans_value) * Number(_callNum));}
        if(_sign[_callSign].name === 'divied'){_ans_value = Number(Number(_ans_value) / Number(_callNum));}
        // console.log(_ans_value)


        if($(_type_answer).find('.number').length == _ans){
            $(_type_answer).append(_equals);
            $(_type_answer).append(_input);
            return false;
        }
        _signPrint.innerHTML = `<p class="${_sign[_callSign].name}">${_sign[_callSign].sign}</p>`;
        $(_type_answer).append(_signPrint);
    }

}

$(document).ready(()=>{
    // 게임 유형 선택
    $('.q_choice_btn_wrap .btn_choice').on('click', (e)=>{
        startBtnClick(e)
    })

})