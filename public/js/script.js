const logInForm = document.querySelector('#log-in-form');
const signUpForm = document.querySelector('#sign-up-form');
const signUpBtn = document.querySelector('#sign-up-button');
const APIKey = '56b6b840b8ed319444b7a8b95dc2f22c';

// function renderAPI() {
// let queryURL = 'https://api.the-odds-api.com/v4/sports/?apiKey=' + APIKey;
// fetch(queryURL)
//     .then(res => res.json())
//     .then((data) => {
//         console.log(data)
//         renderGames(data);
//     }) 
// }
// renderAPI();

function renderGames() {
let gameURL = 'https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&oddsFormat=american&apiKey=' + APIKey;
    fetch(gameURL)
    .then(res => res.json())
    .then((data) => {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        let awayTeam = data[i].away_team;
        let homeTeam = data[i].home_team;
        let gameTime = moment(data[i].commence_time).format('MMMM Do h:mm:ss a');
        $('#upcoming-games').append(`       
        <div class="game-card">
        <div class="away-team">
        <h4>Away Team</h4>
        ${awayTeam}
        </div>
        <div class="game-time">
        <h4>Kickoff</h4>
        ${gameTime}
        </div>          
        <div class="home-team">
        <h4>Home Team</h4>
        ${homeTeam}
        </div>
      </div>`)
    }
    })
}
renderGames();

signUpBtn.addEventListener('click', function () {
    logInForm.setAttribute('class', 'hide');
    signUpForm.setAttribute('class', '');
})