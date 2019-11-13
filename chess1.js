function drawChess(){
	let mainBlock = document.querySelector('.main-block');
	let block;
	let flag = true;
	var figures = [
 {class: "bpeshka1"}, {class: "wpeshka1"}, {class: "konb"}, {class: "konw"},
 {class: "ladb"}, {class: "ladw"}, {class: "slonb"}, {class: "slonw"}, 
 {class: "kingb"}, {class: "kingw"}, {class: "queenb"}, {class: "queenw"}
 ];
/*	let figure = {
        0 : ['-263px -19px', '-484px -22px', '-372px -17px', '-150px -16px', '-42px -16px','-372px -17px', '-484px -22px','-263px -19px'],
        1 : ['-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px', '-595px -19px','-595px -19px', '-595px -19px','-595px -19px'],
        6 : ['-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px', '-595px -116px','-595px -116px', '-595px -116px','-595px -116px'],
        7 : ['-263px -116px', '-484px -116px', '-372px -116px', '-150px -116px', '-42px -116px','-372px -116px', '-484px -116px','-263px -116px'],
    };*/

	for(let i =0; i<8;++i){
		for(let j =0; j<8;++j){
			if(j==0){
				flag = !flag;
			}
			block = document.createElement('div');
				if(flag){
					block.className = 'block black';
					//block.classList.add(figures[i].class);
					//block.id = 'blck';
				}
				else{
					block.className = 'block white';
				//	block.classList.add(figures[i].class);
					//block.id = 'whte';
				}
				if(block.className == 'block white' && j == 0 && i == 0){
					block.classList.add(figures[7].class);
					block.id = 'slonwhite';
				}
				if(block.className == 'block black' && j == 1 && i == 0){
					block.classList.add(figures[2].class);
				//	block.id = 'blck';
				}
				if(block.className == 'block white' && j == 2 && i == 0){
					block.classList.add(figures[5].class);
					//block.id = 'whte';
				}
				if(block.className == 'block black' && j == 3 && i == 0){
					block.classList.add(figures[8].class);
					//block.id = 'blck';
				}
				if(block.className == 'block white' && j == 4 && i == 0){
					block.classList.add(figures[11].class);
					//block.id = 'whte';
				}
				if(block.className == 'block black' && j == 5 && i == 0){
					block.classList.add(figures[4].class);
					//block.id = 'blck';
				}
				if(block.className == 'block white' && j == 6 && i == 0){
					block.classList.add(figures[3].class);
					//block.id = 'whte';
				}
				if(block.className == 'block black' && j == 7 && i == 0){
					block.classList.add(figures[6].class);
					//block.id = 'blck';
				}
				if(block.className == 'block white' && i == 1){
					block.classList.add(figures[1].class);
					//block.id = 'whte';
				}
				if(block.className == 'block black' && i == 1){
					block.classList.add(figures[0].class);
					//block.id = 'blck';
				}
				if(block.className == 'block black' && j == 0 && i == 7){
					block.classList.add(figures[6].class);
					//block.id = 'blck';
				}
				if(block.className == 'block white' && j == 1 && i == 7){
					block.classList.add(figures[3].class);
					//block.id = 'whte';
				}
				if(block.className == 'block black' && j == 2 && i == 7){
					block.classList.add(figures[4].class);
					//block.id = 'blck';
				}
				if(block.className == 'block white' && j == 3 && i == 7){
					block.classList.add(figures[9].class);
					//block.id = 'whte';
				}
				if(block.className == 'block black' && j == 4 && i == 7){
					block.classList.add(figures[10].class);
				//	block.id = 'blck';
				}
				if(block.className == 'block white' && j == 5 && i == 7){
					block.classList.add(figures[5].class);
					//block.id = 'whte';
				}
				if(block.className == 'block black' && j == 6 && i == 7){
					block.classList.add(figures[2].class);
					//block.id = 'blck';
				}
				if(block.className == 'block white' && j == 7 && i == 7){
					block.classList.add(figures[7].class);
					//block.id = 'whte';
				}
				if(block.className == 'block white' && i == 6){
					block.classList.add(figures[1].class);
					//block.id = 'whte';
				}
				if(block.className == 'block black' && i == 6){
					block.classList.add(figures[0].class);
					//block.id = 'blck';
				}
			mainBlock.appendChild(block);
			flag = !flag;
		}
	}
}
drawChess();
let NeRabotaet = document.querySelector('.main-block');
NeRabotaet.addEventListener('click', check);
var Ostanovis;
//function HodiPozhaluista(){
//}	
function check(){
	if (NeRabotaet == event.target) {
		Ostanovis = event.target;
		Ostanovis = event.target.getAttribute("id");
		//Ostanovis.id = event.target.id;
		NeRabotaet.addEventListener('click', NextClick);
  }
}
var PozhaluistaRabotay;
function NextClick(){
	PozhaluistaRabotay = event.target;
	if(event.target.className == 'block black' || event.target.className == 'block white'){
		var tmp;
		tmp.classList.add(Ostanovis.class);
		Ostanovis.classList.add(NeRabotaet.class);
		Ostanovis.classList.remove(Ostanovis.class);
		NeRabotaet.classList.add(Ostanovis.class);
		NeRabotaet.classList.remove(NeRabotaet.class);
	}
}


















/*(var block = document.getElementById('blck');
block.onmousedown = function(e) {
  	block.style.position = 'absolute';
  	moveAt(e);
	document.body.appendChild(block);
 // block.style.zIndex = 1000;

 function moveAt(e) {
    block.style.left = e.pageX - block.offsetWidth / 2 + 'px';
    block.style.top = e.pageY - block.offsetHeight / 2 + 'px';
  }

    document.onmousemove = function(e) {
    moveAt(e);
  }
   block.onmouseup = function() {
    document.onmousemove = null;
    block.onmouseup = null;
  }
}*/

//HodiPozhaluista();

