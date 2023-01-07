axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=100')
    .then(res=> {
        console.log(res.data.results);
        let threeRandomPokemons = [];
        for (let i=0; i<3; i++) {
            threeRandomPokemons.push(Math.floor(Math.random()*100 + 1));
        }
        for (let p of res.data.results) {
            console.log(p.name, p.url);
        }
        for (let num of threeRandomPokemons) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${num}/`)
            .then(res => console.log(res.data));
        }
    })
    .catch(err=> console.log(err));