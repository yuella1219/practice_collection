var condition = null;

const _character = document.getElementById('character'); 
const _itemPot = document.getElementById('active-item-pot');
const _conditionPot = document.getElementById('condition-pot');

const HAPPY_KEY     = 'happy',
        BORING_KEY    = 'boring',
        SICK_KEY      = 'sick',
        ANNOYED_KEY   = 'annoyed',
        SAD_KEY       = 'sad',
        NORMAL_KEY    = 'normal',
        EXCITED_KEY   = 'excited',
        SLEEP_KEY     = 'sleep'

var condition_arr = [
    {feel : 'happy',    img  : 'move-happy',                           conditionPot : "feel-happy"},
    {feel : 'boring',   img  : 'move-boring',                          conditionPot : "feel-boring"},
    {feel : 'sick',     img  : 'move-sick',                            conditionPot : "feel-sick"},
    {feel : 'annoyed',  img  : 'move-annoyed',                         conditionPot : "feel-annoyed"},
    {feel : 'sad',      img  : 'move-sad',                             conditionPot : 'feel-sad'},
    {feel : 'normal',   img  : 'move-normal',                          conditionPot : 'feel-normal'},
    {feel : 'sleep',    img  : ['move-sleep-01', 'move-sleep-02'],     conditionPot : 'feel-sleep'},
    {feel : 'excited',  img  : ['move-excited-01', 'move-excited-02', 'move-excited-03'], conditionPot : 'feel-excited'}
]

var item_arr = [
    {item : 'food',         name : ['food-bread', 'food-candy']},
    {item : 'play',         name : ['play-blocks']},
    {item : 'exercise',     name : ['exercise-ball']}
]

const ITEM_FOOD_BREAD_KEY       = item_arr[0].name[0],
        ITEM_PLAY_BLOCKS_KEY      = item_arr[1].name[0],
        ITEM_EXERCISE_BALL_KEY    = item_arr[2].name[0]

var gauge_exp = 0,
    gauge_condition = 0,
    gauge_health = 0,
    gauge_mood   = 0,
    gauge_fullness   = 0;


// local에 저장된 상태값 가져오기
function getGauge(){

    var _getExp = localStorage.getItem('gauge_exp');
    var _getCondition = localStorage.getItem('gauge_condition');
    var _getHealth = localStorage.getItem('gauge_health');
    var _getMood = localStorage.getItem('gauge_mood');
    var _getFullness = localStorage.getItem('gauge_fullness');
    

    if( _getExp != null ) {
        gauge_exp = Number(_getExp);
    } else {
        localStorage.setItem('gauge_exp', 0);
    }

    if( _getCondition != null ) {
        gauge_condition = Number(_getCondition);
    } else {
        localStorage.setItem('gauge_condition', 0);
    }
    
    if( _getHealth != null ) {
        gauge_health = Number(_getHealth);
    } else {
        localStorage.setItem('gauge_health', 10);
    }
        
    if( _getMood != null ) {
        gauge_mood = Number(_getMood);
    } else {
        localStorage.setItem('gauge_mood', 10);
    }

    if( _getFullness != null ) {
        gauge_fullness = Number(_getFullness);
    } else {
        localStorage.setItem('gauge_fullness', 30);
    }
}
getGauge();


// local에 상태 저장하기
function saveGauge(name, gauge){
    localStorage.setItem(name, gauge)
}


// 밥주기 버튼
function feedButton(g){
    var item = ITEM_FOOD_BREAD_KEY;

    if( g >= 80 ){
        g = 99;

        gauge_condition += -0.5;
        gauge_exp += -0.4;
        stateUpdate(SICK_KEY, item);

    }else if( 30 < g && g < 80 ){

        g += 5;
        gauge_condition += 10;
        gauge_exp += 5;
        stateUpdate(HAPPY_KEY, item);

    }else if( g <= 30 ){

        g += 5;
        gauge_condition += 5;
        gauge_exp += 5;
        stateUpdate(ANNOYED_KEY, item)
    }
    gauge_fullness = g;
    saveGauge('gauge_fullness', g);
    lastActiveTime();
}


// 놀아주기 버튼
function playButton(g){
    var item = ITEM_PLAY_BLOCKS_KEY;

    if( g >= 80 ){
        g = 99;

        gauge_condition += -0.5;
        gauge_exp +=- 0.1;
        stateUpdate(BORING_KEY, item);

    }else if( g < 80 ){

        g += 5;
        gauge_condition += 10;
        gauge_exp += 5;
        stateUpdate(HAPPY_KEY, item);
    }

    gauge_mood = g;
    saveGauge('gauge_mood', g);
    lastActiveTime();
}


// 운동하기 버튼
function exerciseButton(g){
    var item = ITEM_EXERCISE_BALL_KEY;

    if( g >= 95 ){
        g = 99;

        gauge_condition += -0.5;
        stateUpdate(SICK_KEY, item);

    }else if( g < 95 ){

        g += 5;
        gauge_condition += 10;
        stateUpdate(HAPPY_KEY, item);

    }

    gauge_health = g;
    saveGauge('gauge_health', g);
    lastActiveTime();
}


// 재우기 버튼
function getSleepButton(){

    var _sleepB = localStorage.getItem('sleep');

    if( _sleepB == 'N' || _sleepB != true ){
        localStorage.setItem('sleep', 'Y');
    }

    loginConditionAction();
}


// 일어나! 버튼
function wakeUpButton(){
    var _sleepB = localStorage.getItem('sleep');

    if( _sleepB == 'Y' ){
        localStorage.setItem('sleep', 'N');
    }

    loginConditionAction()
}



// 수면 상태에 따른 exp 하락 여부
function expDownLogic(){

}

// 현재 시간을 얻는 함수
function getCurrentTime() {
    return new Date().getTime();
}

// 쿠키에 현재 시간을 저장하는 함수
function setVisitTimeCookie() {
    var currentTime = getCurrentTime();
    document.cookie = "visit_time_now=" + currentTime + "; path=/";
}

// 쿠키에서 방문 시간을 가져오는 함수
function getVisitTimeFromCookie() {
    var name = "visit_time=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) == 0) {
            return parseInt(cookie.substring(name.length), 10);
        }
    }

    return null;
}

// 경과 시간을 계산하는 함수
function calculateElapsedTime() {
    var visitTime = getVisitTimeFromCookie();

    if (visitTime !== null) {
        var currentTime = getCurrentTime();
        var elapsedTime = currentTime - visitTime;
        return elapsedTime;
    } else {
        return null; // 쿠키에 저장된 방문 시간이 없을 경우
    }
}

//마지막으로 상태를 업데이트 한 시간을 쿠키에 저장
function lastActiveTime(){

    var elapsedTime = calculateElapsedTime();
    var seconds = Math.floor(elapsedTime / 1000);

    conditionUpdate(seconds)

    var currentTime = getCurrentTime();
    document.cookie = "visit_time=" + currentTime + "; path=/";

    localStorage.setItem('visit_time', currentTime);
}

// 방문 시간을 쿠키에 저장
setVisitTimeCookie();

function timeCheck(){
    // 경과 시간을 계산하고 출력
    var elapsedTime = calculateElapsedTime();
    if (elapsedTime !== null) {
        var seconds = Math.floor(elapsedTime / 1000);
        console.log("이전 방문으로부터 경과한 시간: " + seconds + " 초");
    } else {
        console.log("이전 방문 시간이 없습니다.");
    }  
}

// 시간에 따른 컨디션 변화
function conditionUpdate(time){

    var downgrade_score = Math.round(time / 300);
    var _sleepB = localStorage.getItem('sleep');

    
    if( _sleepB == 'N' || _sleepB != true ){

        gauge_condition -= downgrade_score;
        gauge_fullness  -= downgrade_score;
        gauge_mood      -= downgrade_score;
        gauge_health    -= downgrade_score;
        
        if(gauge_condition < 0){
            gauge_exp = gauge_exp + Math.round((gauge_condition * 0.5));
            gauge_condition = 0;
        }

    }else if( _sleepB == 'Y' ){

        var downgrade_score = Math.round(time / 3000);
        gauge_condition = gauge_condition - downgrade_score;

    }

    localStorage.setItem('gauge_condition', gauge_condition)
    localStorage.setItem('gauge_exp', gauge_exp)
}


//모션 interval을 위한 변수
var intervalControl;

function startInterval(c){
    intervalControl = setInterval(()=>{ _character.classList.toggle(c); }, 1000)
}
function stopInterval(){
    clearInterval(intervalControl);
}

// 상태 업데이트
function stateUpdate(cdt, item){
    stopInterval();


    for( var i = 0; i < condition_arr.length; i++ ){

        if( Array.isArray(condition_arr[i].img) ) {

            var _imgArr = condition_arr[i].img;

            for( var j = 0; j < _imgArr.length; j++){

                _character.classList.remove(_imgArr[j]);

            }

        }else{

            _character.classList.remove(condition_arr[i].img)
        
        }
        _itemPot.classList.remove(condition_arr[i].itemPot)
        _conditionPot.classList.remove(condition_arr[i].conditionPot)
    }
    
    for( var k = 0; k < item_arr.length; k++ ){

        var _itemArr = item_arr[k].name;
        for( var o = 0; o < _itemArr.length; o++){
            _itemPot.classList.remove(item_arr[o].name)
        }
    }

    var _feel = condition_arr.find(e => e.feel == cdt);

    _itemPot.classList.add(item)
    _conditionPot.classList.add(_feel.conditionPot)

    // 애니메이션 여러장 - 잘 때
    if(cdt == SLEEP_KEY){

        var _imgArr = _feel.img.slice();
        var i = 0;
        i < _imgArr.length;
        intervalControl = setInterval(()=>{
            _character.classList.remove(_imgArr[i]);
            i++;
            if( i == _imgArr.length ) i = 0;
            _character.classList.add(_imgArr[i]);
        }, 1200)
        return false;
    }

    // 애니메이션 여러장 - 즐거울 때
    if(cdt == EXCITED_KEY){

        var _imgArr = _feel.img.slice();
        var i = 0;
        i < _imgArr.length;
        intervalControl = setInterval(()=>{
            _character.classList.remove(_imgArr[i]);
            i++;
            if( i == _imgArr.length ) i = 0;
            _character.classList.add(_imgArr[i]);
        }, 500)
        return false;
    }

    startInterval(_feel.img);
}

// 로그인 시 컨디션에 따른 액션
function loginConditionAction(){

    var _sleepB = localStorage.getItem('sleep');

    if( _sleepB == 'Y' ){
        stateUpdate(SLEEP_KEY, SLEEP_KEY)
        _character.classList.add('move-sleep-01');
        return false;
    }

    if(gauge_condition < 30){

        stateUpdate(SAD_KEY, SAD_KEY)

    }else if(gauge_condition < 80){

        stateUpdate(NORMAL_KEY, NORMAL_KEY)

    }else if(gauge_condition > 80){

        stateUpdate(EXCITED_KEY, EXCITED_KEY)

    }
}
lastActiveTime();
loginConditionAction();
