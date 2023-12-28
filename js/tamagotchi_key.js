var condition = null;

const _character = document.getElementById('character'); 
const _itemPot = document.getElementById('active-item-pot');
const _conditionPot = document.getElementById('condition-pot');

const HAPPY_KEY     = 'happy',
        BORING_KEY    = 'boring',
        SICK_KEY      = 'sick',
        ANNOYED_KEY   = 'annoyed',
        DIZZY_KEY     = 'dizzy',
        EFFORT_KEY    = 'effort',
        SMART_KEY     = 'smart',
        SAD_KEY       = 'sad',
        NORMAL_KEY    = 'normal',
        EXCITED_KEY   = 'excited',
        SLEEP_KEY     = 'sleep'

var condition_arr = [
    {feel : 'happy',    img  : 'move-happy',                           conditionPot : "feel-happy"},
    {feel : 'boring',   img  : 'move-boring',                          conditionPot : "feel-boring"},
    {feel : 'sick',     img  : 'move-sick',                            conditionPot : "feel-sick"},
    {feel : 'annoyed',  img  : 'move-annoyed',                         conditionPot : "feel-annoyed"},
    {feel : 'dizzy',    img  : 'move-dizzy',                           conditionPot : "feel-dizzy"},
    {feel : 'effort',   img  : 'move-effort',                          conditionPot : "feel-normal3"},
    {feel : 'smart',    img  : 'move-smart',                           conditionPot : "feel-boring"},
    {feel : 'sad',      img  : 'move-sad',                             conditionPot : 'feel-sad'},
    {feel : 'normal',   img  : 'move-normal',                          conditionPot : 'feel-normal'},
    {feel : 'sleep',    img  : ['move-sleep-01', 'move-sleep-02'],     conditionPot : 'feel-sleep'},
    {feel : 'excited',  img  : ['move-excited-01', 'move-excited-02', 'move-excited-03'], conditionPot : 'feel-excited'}
]

var item_arr = [
    {item : 'food',         name : ['food-bread', 'food-candy']},
    {item : 'play',         name : ['play-blocks']},
    {item : 'exercise',     name : ['exercise-ball']},
    {item : 'study',        name : ['study-book']}
]

const ITEM_FOOD_BREAD_KEY       = item_arr[0].name[0],
      ITEM_PLAY_BLOCKS_KEY      = item_arr[1].name[0],
      ITEM_EXERCISE_BALL_KEY    = item_arr[2].name[0],
      ITEM_STUDY_BOOK_KEY       = item_arr[3].name[0]

var gauge_exp = 0,
    gauge_condition = 0,
    gauge_health = 0,
    gauge_mood   = 0,
    gauge_fullness   = 0,
    gauge_study   = 0;