
//問題文、選択肢、補足、答え　をセット
const quiz = [
	{
	question:'【問1】ビーチボールバレーにおける「のんさん」の守備範囲をつぎから選べ',
	answers:[
	'半径1メートル',
	'半径3メートル',
	'半径5メートル',
	'半径7メートル'
	],
	help:'補足：調子いい時を除く',
    correct:'半径1メートル'
	},
	
	{
	question:'【問2】「のんさん」がスイーツを食べる頻度をつぎから選べ',
	answers:[
	'週1回',
	'週3回',
	'週5回',
	'週7回'
	],
	help:'補足：一食を1回とする',
    correct:'週5回'
	},
	
	{
	question:'【問3】このクイズをつくるのに参考にしたyoutuberはだれ',
	answers:[
	'ヒグチ',
	'カイト',
	'大塚さん',
	'鳥目'
	],
	help:'補足：新幹線の移動時間にやってたら楽しくなってきた。',
    correct:'カイト'
	},
];


const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


//問題、選択肢、補足、答え　をhtmlに反映させる
const setUpQuiz = (quizIndex) =>{
document.getElementById('js-question').textContent = quiz[quizIndex].question;
document.getElementById('js-answer1').textContent = quiz[quizIndex].answers[0];
document.getElementById('js-answer2').textContent = quiz[quizIndex].answers[1];
document.getElementById('js-answer3').textContent = quiz[quizIndex].answers[2];
document.getElementById('js-answer4').textContent = quiz[quizIndex].answers[3];
document.getElementById('js-help').textContent = quiz[quizIndex].help;
}


//ボタンクリック時の正誤判定
document.getElementById('js-answer1').addEventListener('click',(e)=>{
	clickNo(e);
});
document.getElementById('js-answer2').addEventListener('click',(e)=>{
	clickNo(e);
});
document.getElementById('js-answer3').addEventListener('click',(e)=>{
	clickNo(e);
});
document.getElementById('js-answer4').addEventListener('click',(e)=>{
	clickNo(e);
});

             

setUpQuiz(quizIndex);//最初の問題をセット

const clickNo = (e)=>{
	if(quiz[quizIndex].correct === e.target.textContent){
	 window.alert('◯ 正解');
	 score++;
	}else{
	 window.alert('× 不正解');
	}

	quizIndex++;

	if(quizIndex < quizLength){//まだ問題が残っていれば
	setUpQuiz(quizIndex);//次の問題をセット
	}else{//最終問題ならば
	window.alert('全ての問題がおわりました。（スコア集計中）');
		if(score >= quizLength){//満点ならば
		window.alert('あなたのスコアは' + score + '／' +quizLength + 'で満点です！');
		}else{//満点じゃなければ
		window.alert('あなたのスコアは' + score + '／' +quizLength + 'です。');
		}
	}
};



