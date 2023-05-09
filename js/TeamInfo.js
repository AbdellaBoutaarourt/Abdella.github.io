"use strict"
import{
  stats,
  squad
} from './apis.js'


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const teamID = urlParams.get('id')

let playercard = []


window.onload = function fetchInfo() {

  stats().then(data => {
      const team = data.response

      let logo = team.team.logo
      let nameTeam = team.team.name
      let country = team.league.country
      let flag  = team.league.flag
      let league  = team.league.name
      let logoLeague = team.league.logo

      let gameAway = team.fixtures.played.away
      let gameHome = team.fixtures.played.home
      let gameTotal = team.fixtures.played.total

      let winsHome = team.fixtures.wins.home
      let winsAway = team.fixtures.wins.away
      let winsTotal = team.fixtures.wins.total

      let loseHome = team.fixtures.loses.home
      let loseAway = team.fixtures.loses.away
      let loseTotal = team.fixtures.loses.total

      let drawHome = team.fixtures.draws.home
      let drawAway = team.fixtures.draws.away
      let drawTotal = team.fixtures.draws.total

      let goalsForHome = team.goals.for.total.home
      let goalsForAway = team.goals.for.total.away
      let goalsForTotal = team.goals.for.total.total

      let goalsAgainstHome = team.goals.against.total.home
      let goalsAgainstAway = team.goals.against.total.away
      let goalsAgainstTotal = team.goals.against.total.total

      let goalsForAverageHome = team.goals.for.average.home
      let goalsForAverageAway = team.goals.for.average.away
      let goalsForAverageTotal = team.goals.for.average.total

      let goalsAgainstAverageHome = team.goals.against.average.home
      let goalsAgainstAverageAway = team.goals.against.average.away
      let goalsAgainstAverageTotal = team.goals.against.average.total

      let htmlString = ""

      htmlString += `
    <div class="header">
    <div class="header-image"><img src="${logo}"></div>
      <div class="titleTeam">
      <h1>${nameTeam}</h1>
      <span class= "country"> <ul>
      <li> country : ${country}  <img src=" ${flag}"> </li>
      <li> league : ${league}   <img src=" ${logoLeague}"> </li>
      <li> season : 2022  </li>
      </ul>
        </span>
      </div>

    `
      document.getElementById("header").innerHTML += htmlString;


        let table = ''

        table += `
    <tr>
      <th></th>
      <th>HOME</th>
      <th>AWAY</th>
      <th>ALL</th>
    </tr>
    <tr class="line">
      <td>Game played</td>
      <td>${gameHome}</td>
      <td>${gameAway}</td>
      <td>${gameTotal}</td>
    </tr>
    <tr class="line">
      <td>Wins</td>
      <td>${winsHome}</td>
      <td>${winsAway}</td>
      <td>${winsTotal}</td>
    </tr>
    <tr class="line">
      <td>Draws</td>
      <td>${drawHome}</td>
      <td>${drawAway}</td>
      <td>${drawTotal}</td>
    </tr>
    <tr class="line">
      <td>Loses</td>
      <td>${loseHome}</td>
      <td>${loseAway}</td>
      <td>${loseTotal}</td>
    </tr>
    <tr class="line-mid">
      <th class="mid">GOALS</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr class="line">
      <td>Goals For</td>
      <td>${goalsForHome}</td>
      <td>${goalsForAway}</td>
      <td>${goalsForTotal}</td>
    </tr>
    <tr class="line">
      <td>Goals Against</td>
      <td>${goalsAgainstHome}</td>
      <td>${goalsAgainstAway}</td>
      <td>${goalsAgainstTotal}</td>
    </tr>
    <tr class="line-mid">
      <th class="mid">GOALS AVERAGE</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr class="line">
      <td>Goals For</td>
      <td>${goalsForAverageHome}</td>
      <td>${goalsForAverageAway}</td>
      <td>${goalsForAverageTotal}</td>
    </tr>
    <tr class="line-mid">
      <td>Goals Against</td>
      <td>${goalsAgainstAverageHome}</td>
      <td>${goalsAgainstAverageAway}</td>
      <td>${goalsAgainstAverageTotal}</td>
    </tr>

      `
      document.getElementById('customers').innerHTML = table



    })
  players()

  buttons()

}


function players() {
    squad().then(data => {
      let cards = data.response[0].players

      cards.forEach(card => {
        playercard.push(card)
      })
      document.getElementById("squad").addEventListener("click", () => {

        let goalkeepers = ''
        let midfielders = ''
        let attackers = ''
        let defenders = ''


        for (let card of playercard ) {

          if (card.position === "Goalkeeper" && card.number) {

            goalkeepers += `
              <div class="card">
              <div class = card-image>
              <img src="${card.photo}" alt="">
              </div>
              <div class="card-info">
                <div class="cardname"> ${card.name}</div>
                <div class="cardage"> age: ${card.age} </div>
                <div class id="cardnumber"> ${card.number} </div>
              </div>
            </div>
            </div> `
          }
          document.getElementById('Goalkeepers').innerHTML = goalkeepers;

          if (card.position === "Defender" && card.number) {

            defenders += `
              <div class="card">
              <div class = card-image>
              <img src="${card.photo}" alt="">
              </div>
              <div class="card-info">
                <div class="cardname"> ${card.name}</div>
                <div class="cardage"> age: ${card.age} </div>
                <div class id="cardnumber"> ${card.number} </div>
              </div>
            </div>
            </div> `
          }
          document.getElementById('Defenders').innerHTML = defenders;

          if (card.position === "Midfielder" && card.number) {

            midfielders += `
              <div class="card">
              <div class = card-image>
              <img src="${card.photo}" alt="">
              </div>
              <div class="card-info">
                <div class="cardname"> ${card.name}</div>
                <div class ="cardage"> age: ${card.age} </div>
                <div class id="cardnumber"> ${card.number} </div>
              </div>
            </div>
            </div> `
          }
          document.getElementById('Midfielders').innerHTML = midfielders;

          if (card.position === "Attacker" && card.number) {

            attackers += `
              <div class="card">
              <div class = card-image>
              <img src="${card.photo}" alt="">
              </div>
              <div class="card-info">
                <div class="cardname"> ${card.name}</div>
                <div class ="cardage"> age: ${card.age} </div>
                <div class id="cardnumber"> ${card.number} </div>
              </div>
            </div>
            </div> `
          }
          document.getElementById('Attackers').innerHTML = attackers;




        }
      })

    })
}


function buttons (){
document.getElementById("Statistics").addEventListener("click", () => {
    document.getElementById("players").style.display = "none";
    document.getElementById("customers").style.display = "flex";
    document.getElementById('squads').style.border ="none"
    document.getElementById('Statistics').style.border ="solid #ffffff 3px"
  })

  document.getElementById("squad").addEventListener("click", () => {
    document.getElementById("players").style.display = "flex";
    document.getElementById("customers").style.display = "none";
    document.getElementById('squads').style.border ="solid #ffffff 3px"
    document.getElementById('Statistics').style.border ="none"

  })


}