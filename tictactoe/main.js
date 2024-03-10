var gameboard = [];

const newplayer = function (name) {
    tag = '@' + name;
    return { name, tag };
}
function getPlayer() {
    return prompt("Enter player name");
}
const player1 = newplayer("Lester");
const player2 = newplayer("Ryan");
document.querySelector('.player1name').textContent = player1.tag;
document.querySelector('.player2name').textContent = player2.tag;
game(player1, player2);

function game(player1, player2) {
    turns = 0;
    while (turns < 3) {
        whos_turn = turns % 2 === 0 ? player1.name : player2.name;
        console.log(whos_turn+ ' plays');
        document.querySelector(".whoplays").textContent = whos_turn + 'plays';
        turns++;
    }
}