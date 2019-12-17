let floor = 37;//問題数
let cnt = 0;//回答済み問題数

var result={
	comp: 0, //理解力
	analysis: 0, //自己分析
	urge: 0, //意欲
	com: 0, //コミュ力
}

var ID={
	Text,
	button1,
	button2,
	button3,
	button4,
	button5
}

/*
function getCSV(){
	var req =new XMLHttpRequest();
	req.open("get","questions.csv",true);
	req.send(null);
	req.onload=function(){
		convertCSVtoArray(req.responseText());
	}
}*/

window.onload = function(){
	// ページ読み込み時に実行したい処理(初期化処理)
	document.getElementById( Text ).innerText = Q[0];//質問の読み込み
	document.getElementById( button1 ).innerText = A[0];//回答の読み込み
	document.getElementById( button2 ).innerText = B[0];
	document.getElementById( button3 ).innerText = C[0];
	document.getElementById( button4 ).innerText = D[0];
	document.getElementById( button5 ).innerText = E[0];//ここまで

	for(var e in ID){
		document.getElementById(e).innerText
	}

	document.getElementById( button3 ).style.display= none ;
	document.getElementById( button4 ).style.display= none ;
	document.getElementById( button5 ).style.display= none ;
}

function Change(choice){//分岐を受け取り,評価値を受け取る
	let target  = document.getElementById( Text );
	let Button1 = document.getElementById( button1 );
	let Button2 = document.getElementById( button2 );
	let Button3 = document.getElementById( button3 );
	let Button4 = document.getElementById( button4 );
	let Button5 = document.getElementById( button5 );
	if(cnt >= (floor - 1) || ((cnt == 0) && (choice == 1))){
		if(choice == 0){
			com += e4[cnt];
		}
		let score=  comp + analysis + urge + com;
		if(cnt ==0 || ( comp || analysis || urge || com) < 10 || score< 48){
			target.innerText =  面接不合格です\n  +  合計得点：  + score +  点\n  +  理解：  +  comp +  点　自己分析：  + analysis +  点　意欲：  + urge +  点　コミュ力： 　+ com +  点 ;
		}else{
			target.innerText =  面接合格です\n  +  合計得点：  + score +  点\n  +  理解：  +  comp +  点　自己分析：  + analysis +  点　意欲：  + urge +  点　コミュ力： 　+ com +  点 ;
		}
		document.getElementById( button1 ).parentNode.removeChild(document.getElementById( button1 ));
		document.getElementById( button2 ).parentNode.removeChild(document.getElementById( button2 ));
		document.getElementById( button3 ).parentNode.removeChild(document.getElementById( button3 ));
		document.getElementById( button4 ).parentNode.removeChild(document.getElementById( button4 ));
		document.getElementById( button5 ).parentNode.removeChild(document.getElementById( button5 ));
	}else{
		if(cnt == 18){
			Button1.innerText = A[1];
			Button2.innerText = B[1];
			Button3.innerText = C[0];
			Button4.innerText = D[0];
			Button5.innerText = E[0];
			document.getElementById( button3 ).style.display= block ;
			document.getElementById( button4 ).style.display= block ;
			document.getElementById( button5 ).style.display= block ;
		}else if(cnt ==25){
			Button1.innerText = A[2];
			Button2.innerText = B[2];
			Button3.innerText = C[1];
			document.getElementById( button3 ).style.display= block ;
		}else{
			Button1.innerText = A[0];
			Button2.innerText = B[0];
			Button3.innerText = C[0];
			Button4.innerText = D[0];
			Button5.innerText = E[0];
			document.getElementById( button3 ).style.display= none ;
			document.getElementById( button4 ).style.display= none ;
			document.getElementById( button5 ).style.display= none ;
		}
		if((cnt == 20) && (choice == 4)){
		}else if((cnt == 27) && (choice == 1)){
			urge += 1;
		}else if(choice == 0){
			 comp += e1[cnt];
			analysis += e2[cnt];
			urge += e3[cnt];
			com += e4[cnt];
		}
		if(cnt == 17  && choice == 1){
			cnt ++;
			Button1.innerText = A[1];
			Button2.innerText = B[1];
			Button3.innerText = C[0];
			Button4.innerText = D[0];
			Button5.innerText = E[0];
			document.getElementById( button3 ).style.display= block ;
			document.getElementById( button4 ).style.display= block ;
			document.getElementById( button5 ).style.display= block ;
		}
		if(cnt == 22 && choice == 1){
			cnt ++;
		}
		cnt++;
		target.innerText  = Q[cnt];
	}
}

function Reload(){
	location.reload();
}
