let tetris = document.createElement('div');
tetris.classList.add('tetris');
function drawTetris(){
	for (var i = 1;i<181;++i) {
		let kletka = document.createElement('div');
		kletka.classList.add('kletka');
		tetris.appendChild(kletka);
	}
	let main = document.getElementsByClassName('main')[0];
	main.appendChild(tetris);
	let kletka = document.getElementsByClassName('kletka');
	let j = 0;
	//alert("True");
	for(let y = 18;y>0;y--){
		for(let x = 1; x < 11; ++x){
			kletka[j].setAttribute('posX', x);
			kletka[j].setAttribute('posY', y);
			++j;		
		}
	}

}
drawTetris();
	let x = 5, y = 15;
	let mainArr = [
		//palka
		[
			[0,1],
			[0,2],
			[0,3],
			//90 grad
		[
			[-1,1],
			[0, 0],
			[1,-1],
			[2,-2],
		],
			//180 grad
		[
			[1,-1],
			[0, 0],
			[-1,1],
			[-2,2],
		],
			//270 grad
		[
			[-1,1],
			[0, 0],
			[1,-1],
			[2,-2],
		],
			//360 grad
		[
			[1,-1],
			[0, 0],
			[-1,1],
			[-2,2],
		]
		],

		//kvadrat
		[
			[1,0],
			[0,1],
			[1,1],
			//90 grad
		[
			[0, 0],
			[0, 0],
			[0, 0],
			[0, 0],
			],
			//180 grad
		[
			[0, 0],
			[0, 0],
			[0, 0],
			[0, 0],
		],
			//270 grad
			[
			[0, 0],
			[0, 0],
			[0, 0],
			[0, 0],
			],
			//360 grad
		[
			[0, 0],
			[0, 0],
			[0, 0],
			[0, 0],
		],
		],

		// L
		[
			[1,0],
			[0,1],
			[0,2],
			//90 grad
		[
			[0, 0],
			[-1,1],
			[1, 0],
			[2,-1],
		],
			//180 grad
		[
			[1, -1],
			[1, -1],
			[-1, 0],
			[-1, 0],
		],
			//270 grad
			[
			[-1,0],
			[0,-1],
			[2,-2],
			[1,-1],
			],
			//360 grad
		[
			[0,-1],
			[0,-1],
			[-2, 0],
			[-2, 0],
		],
		],

		// L vlevo
		[
			[1,0],
			[1,1],
			[1,2],
		[
			[0,0],
			[0,0],
			[1,-1],
			[-1,-1],
		],
		[
			[0,-1],
			[-1,0],
			[-2,1],
			[1,0],
		],
		[
			[2,0],
			[0,0],
			[1,-1],
			[1,-1],
		],
		[
			[-2,0],
			[1,-1],
			[0,0],
			[-1,1],
		]
		],
		//Z vpravo
		[
			[1, 0],
			[-1,1],
			[0, 1],
		[
			[0,-1],
			[-1,0],
			[2,-1],
			[1,0],
		],
		[
			[0,0],
			[1,-1],
			[-2,0],
			[-1,-1],
		],
		[
			[0,-1],
			[-1,0],
			[2,-1],
			[1,0],
		]
		],
		//Z vlevo
		[
			[1,0],
			[1,1],
			[2,1],
		[
			[2,-1],
			[0,0],
			[1,-1],
			[-1,0]
		],
		[
			[-2,0],
			[0,-1],
			[-1,0],
			[1,-1]
		],
		[
			[2,-1],
			[0,0],
			[1,-1],
			[-1,0]
		],
		[
			[-2,0],
			[0,-1],
			[-1,0],
			[1,-1]
		]
		],
		//T
		[
			[1,0],
			[2,0],
			[1,1],
		[
			[1,-1],
			[0,0],
			[0,0],
			[0,0],
		],
		[
			[0,0],
			[-1,0],
			[-1,0],
			[1,-1],
		],
		[
			[1,-1],
			[1,-1],
			[1,-1],
			[0,0],
		],
		[
			[-2,0],
			[0,-1],
			[0,-1],
			[-1,-1],
		]
		],
	]

let currentFig = 0;
let figureBody = 0;
let rotate = 1;

function createFig(){

	function Rand(){
		return Math.round(Math.random()*(mainArr.length-1));
	}
	rotate = 1;
	currentFig = Rand();

	figureBody = [
		document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
		document.querySelector(`[posX = "${x + mainArr[currentFig][0][0]}"][posY = "${y + mainArr[currentFig][0][1]}"]`),
		document.querySelector(`[posX = "${x + mainArr[currentFig][1][0]}"][posY = "${y + mainArr[currentFig][1][1]}"]`),
		document.querySelector(`[posX = "${x + mainArr[currentFig][2][0]}"][posY = "${y + mainArr[currentFig][2][1]}"]`),
	]

	for(let k = 0;k < figureBody.length; ++k){
		figureBody[k].classList.add('figure');
	}
}
createFig();
let score = 0;
let input = document.getElementsByTagName('input')[0];
input.value = `Your score is: ${score}`;
function move(){
	let flagok = true;
	let coords = [
		[figureBody[0].getAttribute('posX'),figureBody[0].getAttribute('posY')],
		[figureBody[1].getAttribute('posX'),figureBody[1].getAttribute('posY')],
		[figureBody[2].getAttribute('posX'),figureBody[2].getAttribute('posY')],
		[figureBody[3].getAttribute('posX'),figureBody[3].getAttribute('posY')],
	];
	for(let z = 0;z<coords.length;++z){
		if(coords[z][1] == 1 || document.querySelector(`[posX = "${coords[z][0]}"][posY = "${coords[z][1] - 1}"]`).classList.contains('set')){//esli nizhniy ryad ili snizu est figuri
			flagok = false;
			break;
		}
	}
	if(flagok == true){
		for(let z =0;z<figureBody.length;++z){
			figureBody[z].classList.remove('figure');
		}
		figureBody = [
		document.querySelector(`[posX = "${coords[0][0]}"][posY = "${coords[0][1] - 1}"]`),
		document.querySelector(`[posX = "${coords[1][0]}"][posY = "${coords[1][1] - 1}"]`),
		document.querySelector(`[posX = "${coords[2][0]}"][posY = "${coords[2][1] - 1}"]`),
		document.querySelector(`[posX = "${coords[3][0]}"][posY = "${coords[3][1] - 1}"]`),
		];
		for(let i =0;i<figureBody.length;++i){
			figureBody[i].classList.add('figure');
		}
	}
	else{
		for(let q =0;q<figureBody.length;++q){
			figureBody[q].classList.remove('figure');
			figureBody[q].classList.add('set');
		}
		for(let i =1 ;i<15;++i){
			let count = 0;
			for(let k = 1;k<11;++k){
				if(document.querySelector(`[posX = "${k}"][posY = "${i}"]`).classList.contains('set')){
					count++;
					if(count == 10){
						score +=100;
						input.value = `Your score is: ${score}`;
						for(let m =1 ;m<11;++m){
							document.querySelector(`[posX = "${m}"][posY = "${i}"]`).classList.remove('set');
						}
						let set = document.querySelectorAll('.set');
						let NewSet =[];
						for(let s =0;s<set.length;++s){
							let setCoords = [set[s].getAttribute('posX'),set[s].getAttribute('posY'),];
							if(setCoords[1] > i){
								set[s].classList.remove('set');
								NewSet.push(document.querySelector(`[posX = "${setCoords[0]}"][posY = "${setCoords[1] - 1}"]`));
							}
						}
						for(let a =0;a<NewSet.length;++a){
							NewSet[a].classList.add('set');
						}
						i--;
					}
				}
			}
		}
		for(let n =1 ;n<11;++n){
			if(document.querySelector(`[posX = "${n}"][posY = "${15}"]`).classList.contains('set')){
				clearInterval(interval);
				alert("Vse");
				break;
			}
		}
		createFig();
	}
}
let interval = setInterval(() =>{
	move();
}, 300);

let flag = true;

window.addEventListener('keydown', function(e){
	let coords1 = [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')];
	let coords2 = [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')];
	let coords3 = [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')];
	let coords4 = [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')];

	function NewCoord(a){

		flag = true;
		let figureNew = [
			document.querySelector(`[posX = "${+coords1[0] + a}"][posY = "${coords1[1]}"]`),
			document.querySelector(`[posX = "${+coords2[0] + a}"][posY = "${coords2[1]}"]`),
			document.querySelector(`[posX = "${+coords3[0] + a}"][posY = "${coords3[1]}"]`),
			document.querySelector(`[posX = "${+coords4[0] + a}"][posY = "${coords4[1]}"]`),
		];
		for(let i =0; i<figureNew.length;++i){
			if(!figureNew[i] || figureNew[i].classList.contains('set')){
				flag = false;
			}
		}
		if(flag == true){
			for(let z =0;z<figureBody.length;++z){
				figureBody[z].classList.remove('figure');
			}

			figureBody = figureNew;

			for(let i =0;i<figureBody.length;++i){
			figureBody[i].classList.add('figure');
			}
		}
	}

	if(event.keyCode == 37){
		NewCoord(-1);
	}
	else if(event.keyCode == 39){
		NewCoord(1);
	}
	else if(event.keyCode == 40){
		move();
	}
	else if(event.keyCode == 32){
		flag = true;
		let figureNew = [
			document.querySelector(`[posX = "${+coords1[0] + mainArr[currentFig][rotate + 2][0][0]}"][posY = "${+coords1[1] + mainArr[currentFig][rotate + 2][0][1]}"]`),
			document.querySelector(`[posX = "${+coords2[0] + mainArr[currentFig][rotate + 2][1][0]}"][posY = "${+coords2[1] + mainArr[currentFig][rotate + 2][1][1]}"]`),
			document.querySelector(`[posX = "${+coords3[0] + mainArr[currentFig][rotate + 2][2][0]}"][posY = "${+coords3[1] + mainArr[currentFig][rotate + 2][2][1]}"]`),
			document.querySelector(`[posX = "${+coords4[0] + mainArr[currentFig][rotate + 2][3][0]}"][posY = "${+coords4[1] + mainArr[currentFig][rotate + 2][3][1]}"]`),
		];
		for(let i =0; i<figureNew.length;++i){
			if(!figureNew[i] || figureNew[i].classList.contains('set')){
				flag = false;
			}
		}
		if(flag == true){
			for(let z =0;z<figureBody.length;++z){
				figureBody[z].classList.remove('figure');
			}

			figureBody = figureNew;

			for(let i =0;i<figureBody.length;++i){
			figureBody[i].classList.add('figure');
			}
			if(rotate < 4){
				rotate++;
			}
			else{
				rotate = 1;
			}
		}
	}
})
