const btn = document.querySelector('button');
const div = document.querySelector('div');
const img = document.querySelector('img');


window.addEventListener("DOMContentLoaded", function() {
    btn.style.display = "block";
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res=> {
           deck_id = res.data.deck_id; 
           return deck_id;
        })
        .then(res=> {
            btn.addEventListener('click', function() {
                axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
                .then(res=> {
                    let num = Math.floor(Math.random()*45 + 1);
                    num *= Math.round(Math.random()) ? 1 : -1;
                    let img = document.createElement('img');
                    img.src = res.data.cards['0'].image;
                    img.style.rotate = `${num}deg`;
                    div.append(img);
                })
                .catch(err => {
                    console.log(err);
                    div.innerHTML = '<h1 style="text-align:center;">No more cards</h1>';
                });
            });
        });
});
