const mult = document.querySelector('#multiple');
const fav = document.querySelector('#favorite');

// 1.
// function numberFacts(favoriteNumber) {
//     axios.get(`http://numbersapi.com/${favoriteNumber}?json`)
//         .then((res => {
//             console.log(res.data);
//         }))
//         .catch(err => console.log(err));
// }

// 2.
axios
    .get('http://numbersapi.com/2,23,7,12')
    .then(res => {
        for (let num in res.data) {
           let li = document.createElement('li');
           li.innerText = res.data[num];
           mult.append(li);
        }
    })
    .catch(err => console.log(err));

// 3.
let fourFacts = [];
for (let i = 1; i < 5; i++) {
    fourFacts.push(
        axios.get('http://numbersapi.com/5?json')
    );
}
Promise.all(fourFacts)
    .then(facts => {
        facts.forEach(fact => {
            let li = document.createElement('li');
            li.innerText = fact.data.text;
            fav.append(li);
        });
    })
    .catch(err => console.log(err));