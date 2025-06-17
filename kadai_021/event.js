const defText = 'ボタンをクリックしてください';
let first = false;
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const viewTime = document.getElementById('time');

// ボタンクリック時の処理
btn.addEventListener('click', () => {
  // 初回のみpタグを生成
  if (!first) {
    const viewTimeP = document.createElement('p');
    viewTimeP.id = 'timeP';
    viewTime.appendChild(viewTimeP);
    first = true;
  }
  // タイムをセット
  let sec=2;
  const viewTimeP = document.getElementById('timeP');
  viewTimeP.textContent = `${sec}`; // pタグに初期タイムを表示
  text.textContent = defText;       // 初期テキストをセット
  btn.disabled = true;              // ボタンを無効化

  // 1秒ごとにカウントダウン
  let cntTime = setInterval(() => {

    viewTimeP.textContent = `${--sec}`; // pタグの表示を更新

    // タイムが0になったらテキストを変更
    if (sec <= 0) {
      text.textContent = 'ボタンをクリックしました！';
      clearInterval(cntTime);   // カウントダウンを停止
      btn.disabled = false;     // ボタンを再度有効化
    }
  }, 1000);
});

