const logInForm = document.querySelector('#log-in-form');
const signUpForm = document.querySelector('#sign-up-form');
const signUpBtn = document.querySelector('#sign-up-button');
const APIKey = '56b6b840b8ed319444b7a8b95dc2f22c';
//const APIKey = '120ef731bdf1980233cbe2d570c2f606';

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

    // for (let i = 0; i < data.length; i++) {
    //     let odds = JSON.stringify(data[i].bookmakers[i].markets[i].outcomes[i]);
    //     console.log(odds);
    //     $('#recent-games').append(`       
    //     <div class="game-card">
    //     <div class="away-team">
    //     ${odds}
    //     </div>        
    //   </div>`)
    // }
    })
}
renderGames();

signUpBtn.addEventListener('click', function () {
    logInForm.setAttribute('class', 'hide');
    signUpForm.setAttribute('class', '');
})
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://sportspage-feeds.p.rapidapi.com/games?league=NFL",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "sportspage-feeds.p.rapidapi.com",
		"x-rapidapi-key": "8a7217d918msh91244be5a91f2d9p1e6c15jsn47be19cd5b73"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});



// TODO
// Move to handlebars
// API for odds and team data
// Leaderboard displays users score
// Create a "points" system for users
// Create users