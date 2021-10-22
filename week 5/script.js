function smile() {
    let msg = document.getElementById('msg');
    msg.innerHTML ='Smile' + '&#9786;';

    for (let i = 9728; i <= 10000; i++) {
        msg.innerHTML = msg.innerHTML + '<br />' + ' &#' + i + ';   ( ' + i + ' )';
    }
}
