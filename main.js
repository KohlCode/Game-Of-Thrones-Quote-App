document.querySelector('button').addEventListener('click', getQuote)

let url = 'https://game-of-thrones-quotes.herokuapp.com/v1/random';


function getQuote(){
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h1').innerText = data.character.name;
    document.querySelector('h2').innerText = data.character.house.name;
    document.querySelector('p').innerText = data.sentence;
    })
    .catch(err => {
    
        console.log(`error ${err}`)
    });
  
}

