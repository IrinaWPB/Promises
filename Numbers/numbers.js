const mult = document.querySelector('#multiple');
const fav = document.querySelector('#favorite');

// ----------------- 1.
// function numberFacts(favoriteNumber) {
//     axios.get(`http://numbersapi.com/${favoriteNumber}?json`)
//         .then((res => {
//             console.log(res.data);
//         }))
//         .catch(err => console.log(err));
// }

// ----------------- 1. async/await
// async function numberFacts(favoriteNumber) {
//     try {
//         let res = await axios.get(`http://numbersapi.com/${favoriteNumber}?json`);
//         console.log(res.data.text);
//     } catch {
//        console.log("OOPS!");
//     }
// }

// ---------------- 2.
// axios
//     .get('http://numbersapi.com/2,23,7,12')
//     .then(res => {
//         for (let num in res.data) {
//            let li = document.createElement('li');
//            li.innerText = res.data[num];
//            mult.append(li);
//         }
//     })
//     .catch(err => console.log(err));

// ---------------- 2. async/await
async function multipleNumbers() {
    try {
        let res = await axios.get('http://numbersapi.com/2,23,7,12');
        for (let num in res.data) {
            let li = document.createElement('li');
            li.innerText = res.data[num];
            mult.append(li);
        }
    } catch {
        console.log('OOOPS!');
    }
}
multipleNumbers();

// ---------------3.
// let fourFacts = [];
// for (let i = 1; i < 5; i++) {
//     fourFacts.push(
//         axios.get('http://numbersapi.com/5?json')
//     );
// }
// Promise.all(fourFacts)
//     .then(facts => {
//         facts.forEach(fact => {
//             let li = document.createElement('li');
//             li.innerText = fact.data.text;
//             fav.append(li);
//         });
//     })
//     .catch(err => console.log(err));

    // ------------ 3. Async/await

async function fourFacts(number) {
    let url = `http://numbersapi.com/${number}?json`;
    let facts = [];
    for (let i=0; i<4; i++) {
        facts.push(await axios.get(url));
    }
    for (let fact of facts) {
        let li = document.createElement('li');
        li.innerText = fact.data.text;
        fav.append(li);
    }
}

fourFacts(4);
