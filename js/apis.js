
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const teamID = urlParams.get('id')

const key = {
    method: 'GET',
    headers: {
      "x-rapidapi-key": "c6c38485905470bccf0bfe920f381bf0",
      "x-rapidapi-host": "v3.football.api-sports.io"
    },
  }

async function standingFetch()  {
   const response =  await fetch('https://v3.football.api-sports.io/standings?league=39&season=2022', key)
  const data = await response.json();
  return data
}

async function scorers()  {
  const response =  await fetch('https://v3.football.api-sports.io/players/topscorers?league=39&season=2022', key)
 const data = await response.json();
 return data
}

async function passers()  {
  const response =  await fetch('https://v3.football.api-sports.io/players/topassists?league=39&season=2022', key)
 const data = await response.json();
 return data
}

async function stats()  {
const response =  await fetch(`https://v3.football.api-sports.io/teams/statistics?league=39&season=2022&team=${teamID}`, key)
 const data = await response.json();
 return data
}

async function squad()  {
  const response =  await fetch(`https://v3.football.api-sports.io/players/squads?team=${teamID}`, key)
   const data = await response.json();
   return data
  }





export{
standingFetch,
scorers,
passers,
stats,
squad,
}