let floor = 37;		//ツリーの階層数
let cnt = 0;		//現在の階層
let Q = new Array("志望動機はありますか",
"あなたが受ける会社の企業理念をしっていますか",
"あなたが受ける会社の業務方針を知っていますか",
"あなたが受ける会社の基本方針(社会貢献等)を知っていますか",
"入社後でやりたいと思っている業務はありますか",
"入社後で配属を希望する部署はありますか",
"あなたが受ける会社のSNSはチェックしてますか",
"あなたが受ける会社のHPはチェックしてますか",
"あなたが受ける会社についての求人サイトや求人広告は確認したことがありますか",
"あなたが受ける会社が属する業界・職種については調べていますか",
"あなたが受ける会社の社長の顔と名前はわかりますか",
"自分自身の強みは明確に言えますか",
"あなたの強み(長所)となるに至った出来事や強みを活かせたエピソードは具体的に話せますか",
"自分の弱み(短所)は明確に言えますか",
"あなたが受ける会社に入社後のあなたの展望はありますか",
"あなたが受ける会社を志望するに至った明確なきっかけはありますか",
"あなたが受ける会社へのきっかけとは違う明確な志望理由がありますか",
"挫折経験はありますか",
"それから学んだことや，次に生かせたことはありますか",
"あなたは交友関係の中でどのような立ち位置にいますか",
"あなたがなりたい社会人像はありますか",
"好きな教科はありますか",
"普段家では決まってすることはありますか",
"それには目的意思が伴っていますか",
"学生時代、部活動を積極的に行っていましたか",
"学生時代、ボランティアなどは自主的に行っていましたか",
"趣味は多いほうですか",
"わからないことをすぐに人に聞けますか",
"友達が髪型を変えたのですが、まったく似合っていません。感想を求められたとき、あなたは嘘をつかずに褒めますか",
"友達数人と旅行に行く予定があります。あなたには行きたい場所があるのですが、他のところに行きたいと思っている人もいるようです。あなたは意見を最後の方に述べますか",
"話していて「この人苦手だな」と思ったとき、あなたはいつもより饒舌に(口数が多く)なりますか",
"あまりよく知らない人がいる飲み会で、あなたは周りに自分のキャラを合わせますか",
"レストランのテーブル席で会話をしているとき、あなたは脚をじっとさせていますか",
"友達の恋人から言い寄られてしまいました。断るのなら、そのことをその友達に隠しますか",
"話は面白いが嘘をつくおじさんか、普段は優しいが酔っぱらうと説教を始めるおじさん。あなたはどちらが嫌ですか？前者ならyes, 後者ならnoで答えてください",
"恋人のお母さんから借りていた傘を壊してしまいました。あなたは正直に伝えますか",
"自分は悪くないのに謝らなければいけないとき、勝った気がしますか？それとも負けた気がしますか？前者ならyes, 後者ならnoで答えてください");		//質問内容
let A = new Array(			//選択肢内文字列 1
	"Yes",//00b
	"リーダー",
	"多い",
	);
let B = new Array(			//選択肢内文字列 2
	"No",
	"サポート役",
	"普通",
	);
let C = new Array(			//選択肢内文字列 3
	"ムードメーカー",
	"少ない",
	);
let D = new Array(			//選択肢内文字列 4
	"相談役",
	);
let E = new Array(			//選択肢内文字列 5
	"分からない",
	);
let e1 = new Array(0,2,2,2,1,2,1,2,1,1,1,0,0,0,0,0,0,0,0,0,
				   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);		//理解
let e2 = new Array(0,0,0,0,0,0,0,0,0,0,0,1,2,1,2,3,2,0,2,1,
				   1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);		//自己分析
let e3 = new Array(0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				   1,1,0,2,2,3,2,2,0,0,0,0,0,0,0,0,0);		//意欲
let e4 = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
				   0,0,0,0,0,0,0,0,1,1,2,1,1,3,2,2,2);	//コミュ力
let a1 = 0;
let a2 = 0;
let a3 = 0;
let a4 = 0;

window.onload = function(){
// ページ読み込み時に実行したい処理
document.getElementById("Text").innerText = Q[0];
document.getElementById("button1").innerText = A[0];
document.getElementById("button2").innerText = B[0];
document.getElementById("button3").innerText = C[0];
document.getElementById("button4").innerText = D[0];
document.getElementById("button5").innerText = E[0];
document.getElementById("button3").style.display="none";
document.getElementById("button4").style.display="none";
document.getElementById("button5").style.display="none";
}

function Change(num){//分岐を受け取り,評価値を受け取る
	let target  = document.getElementById("Text");
	let Button1 = document.getElementById("button1");
	let Button2 = document.getElementById("button2");
	let Button3 = document.getElementById("button3");
	let Button4 = document.getElementById("button4");
	let Button5 = document.getElementById("button5");
	if(cnt >= (floor - 1) || ((cnt == 0) && (num == 1))){
		if(num == 0){
			a4 += e4[cnt];
		}
		let a = a1 + a2 + a3 + a4;
		if(cnt ==0){
			target.innerText = "面接不合格です\n" + "合計得点：" + a + "点\n" + "理解：" + a1 + "点　自己分析：" + a2 + "点　意欲：" + a3 + "点　コミュ力："　+ a4 + "点";
		}else if((a1 || a2 || a3 || a4) < 10 || a < 48){
			target.innerText = "面接不合格です\n" + "合計得点：" + a + "点\n" + "理解：" + a1 + "点　自己分析：" + a2 + "点　意欲：" + a3 + "点　コミュ力："　+ a4 + "点";
		}else{
			target.innerText = "面接合格です\n" + "合計得点：" + a + "点\n" + "理解：" + a1 + "点　自己分析：" + a2 + "点　意欲：" + a3 + "点　コミュ力："　+ a4 + "点";
		}
		document.getElementById("button1").parentNode.removeChild(document.getElementById("button1"));
		document.getElementById("button2").parentNode.removeChild(document.getElementById("button2"));
		document.getElementById("button3").parentNode.removeChild(document.getElementById("button3"));
		document.getElementById("button4").parentNode.removeChild(document.getElementById("button4"));
		document.getElementById("button5").parentNode.removeChild(document.getElementById("button5"));
	}else{
		if(cnt == 18){
			Button1.innerText = A[1];
			Button2.innerText = B[1];
			Button3.innerText = C[0];
			Button4.innerText = D[0];
			Button5.innerText = E[0];
			document.getElementById("button3").style.display="block";
			document.getElementById("button4").style.display="block";
			document.getElementById("button5").style.display="block";
		}else if(cnt ==25){
			Button1.innerText = A[2];
			Button2.innerText = B[2];
			Button3.innerText = C[1];
			document.getElementById("button3").style.display="block";
		}else{
			Button1.innerText = A[0];
			Button2.innerText = B[0];
			Button3.innerText = C[0];
			Button4.innerText = D[0];
			Button5.innerText = E[0];
			document.getElementById("button3").style.display="none";
			document.getElementById("button4").style.display="none";
			document.getElementById("button5").style.display="none";
		}
		if((cnt == 20) && (num == 4)){
		}else if((cnt == 27) && (num == 1)){
			a3 += 1;
		}else if(num == 0){
			a1 += e1[cnt];
			a2 += e2[cnt];
			a3 += e3[cnt];
			a4 += e4[cnt];
		}
		if(cnt == 17  && num == 1){
			cnt ++;
			Button1.innerText = A[1];
			Button2.innerText = B[1];
			Button3.innerText = C[0];
			Button4.innerText = D[0];
			Button5.innerText = E[0];
			document.getElementById("button3").style.display="block";
			document.getElementById("button4").style.display="block";
			document.getElementById("button5").style.display="block";
		}
		if(cnt == 22 && num == 1){
			cnt ++;
		}
		cnt++;
		target.innerText  = Q[cnt];
	}
}

function Reload(){
	location.reload();
}
