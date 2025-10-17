//モーダルウィンドウを呼び出す関数
function modalOpen(){
    document.getElementById("modal").style.display = "block";
};

//「送信」ボタンをクリックしたときにモーダルウィンドウを起動する
document.getElementById("submit").onclick = modalOpen;

//モーダルウィンドウを閉じる関数
function modalClose()
{
    document.getElementById("modal").style.display = "none";
};

document.getElementById("modal-close").onclick = modalClose;

//ページを遷移させる関数
function modalSubmit()
{
    location ="complete.html"
};

//モーダル上で送信ボタンをクリックしたときにページを遷移する
document.getElementById("modal-submit").onclick = modalSubmit;
