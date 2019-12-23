let floor = 37;//問題数
let cnt = 0;//回答済み問題数
var fs = require("fs");
var data = JSON.parse(fs.readFileSync('questions.json', 'utf-8'));
var questions=[];
var answerNum=[]
var answers=[[]];

var comp=0,analysis=0,urge=0,com=0;

window.onload = function(){
	cnt=0;
	loadQ(cnt);
}

function loadQ(q){
	document.getElementById("Text").innerText=String(data[q]["質問"]);
	for(var a=0;a<5;a++){
		if(a<data[q]["選択肢数"]){
			document.getElementById("button"+String(a+1)).innerText=data[q]["選択肢"+String(a+1)];
			document.getElementById("button"+String(a+1)).style.display="block";
		}else{
			document.getElementById("button"+String(a+1)).style.display="none";
		}
	}
}

function addScore(q){
	comp+=data[q]["理解力"];
	analysis+=data[q]["自己分析力"];
	urge+=data[q]["意欲"];
	com+=data[q]["コミュニケーション能力"];
}

function Change(choice){
	if(choice==0){
		addScore(cnt);
	}
	if(cnt==27 && choice==1){
		urge++;
	}
	if(cnt>=floor-1 || (cnt==0 && choice==1)){
		var score=comp+analysis+urge+com;
		var resultText="";
		if(cnt ==0 || ( comp || analysis || urge || com) < 10 || score< 48){
			resultText+="面接不合格です\n";
		}else{
			resultText+="面接合格です\n";
		}
		resultText+="合計得点："  + String(score) +  "/60点\n"  +  "理解："  +  String(comp) +  "点　自己分析："  + String(analysis) +  "点　意欲："  + String(urge) +  "点　コミュ力：" 　+ String(com) +  "点";
		document.getElementById("Text").innerText=resultText;
		for(var i=1;i<=5;i++){
			document.getElementById("button"+String(i)).style.display="none";
		}
	}else{
		cnt++;
		loadQ(cnt);
	}
}

function Reload(){
	location.reload();
}
