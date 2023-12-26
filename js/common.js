function dataPushArrayTest(){
    const _list = $('.test_data li');
    // console.log(_list)
    let _arr = [];
    for(var i = 0; i < _list.length; i++){
        let _txt = $(_list[i]).find('a').attr('data-code');
        _arr.push(String(_txt));
    }
    for(var j = 0; j < _list.length; j++){
        $(_list[j]).find('a').text(`${_arr[j]}`)
    }
}