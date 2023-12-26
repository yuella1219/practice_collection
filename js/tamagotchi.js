class tamaLeve0l{
    constructor(x, y){
        this.canvas = document.querySelector('#tamagotchi');
        this.ctx = canvas.gotContext('2d');
        this.x = x;
        this.y = y;
        this.velocity = {
            x : 1,
            y : 1
        }
        this.acceleration = {
            x : 0,
            y : 0
        }
    }
}

const _grid = document.querySelector('.grid');

function girdLine(){
    let _x = _grid.clientWidth;

    for(var i = 0; i < _x; i += 5){
        let _gridLine = document.createElement('div');
        _gridLine.classList.add(`x-line${[i]}`);
        _gridLine.style = `left : ${[i]}px;`
        _grid.appendChild(_gridLine);
    }
    let _y = _grid.clientHeight;
    for(var j = 0; j < _y; j += 5){
        let _gridLine = document.createElement('div');
        _gridLine.classList.add(`y-line${[j]}`);
        _gridLine.style = `top : ${[j]}px;`
        _grid.appendChild(_gridLine);
    }
}

function level01Draw(){
    const _level01 = document.querySelector('#level-01');
    const _count = 100;
    for(var i = 0; i < _count; i++){
        let dot = document.createElement('span');
        _level01.appendChild(dot);
    }
}

// girdLine()
// level01Draw()