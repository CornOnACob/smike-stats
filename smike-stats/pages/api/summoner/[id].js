export default async function summonerHandler (req, res) {
  try {
    const response = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Doublelift?api_key=${process.env.API_KEY}`);
    const summonerData = await response.json();
    res.status(200).json(summonerData);
  }
  catch (error) {
    res.status(400).json({error});
  }
}
