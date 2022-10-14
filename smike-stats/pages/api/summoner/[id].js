export default async function summonerHandler (req, res) {
  try {
    //Fetch the summoner data
    const summonerRes = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.query.id}?api_key=${process.env.API_KEY}`);
    const summonerData = await summonerRes.json();

    //Fetch the summoner's list of recent League matches
    const matchListRes = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerData.puuid}/ids?start=0&count=20&api_key=${process.env.API_KEY}`);
    const matchListData = await matchListRes.json();

    //The response will have an array with the 5 most recent matches
    const matches = [];

    for (let i = 0; i < 5; i++) {
      //Fetch the data for each individual match
      const matchRes = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${matchListData[i]}?api_key=${process.env.API_KEY}`);
      const matchData = await matchRes.json();
      
      //This is a hacky way of finding the player index.. sorry, short on time!
      for (let j = 0; j < matchData.info.participants.length; j++) {
        if (matchData.info.participants[j].puuid === summonerData.puuid) {
          matchData.playerIndex = j;
        }
      }

      matches.push(matchData);
    }

    res.status(200).json({
      matches: matches,
    });
  }
  catch (error) {
    res.status(400).json({error});
  }
}
