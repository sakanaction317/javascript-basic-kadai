//btnというidを持つHTML要素を取得、定数に代入する
const Btn = document.getElementById('btn');

//textというidを持つHTML要素を取得し、定数に代入する
const Text = document.getElementById('text');

//HTML要素がクリックされた時にイベント処理を実行する
Btn.addEventListener ('click', () => {
    //h2要素を新しく作成する
    const H2 = document.createElement('li');

    //作成したh2要素に「ボタンをクリックしました」というテキストを追加する
    H2.textContent = 'ボタンをクリックしました';

    //作成したH2要素をtext要素の子要素として末尾に追加する
    Text.appendChild(H2);

    text.textContent = 'ボタンをクリックしました';
});