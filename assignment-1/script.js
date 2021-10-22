function emoji() {
    let msg = document.getElementById('msg');
    msg.innerHTML =' ';

    for (let i = 127744; i <= 127844; i++) {
        msg.innerHTML = msg.innerHTML + '<br />' + ' &#' + i + ';   ( ' + i + ' )';
    }
}
