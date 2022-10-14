import styles from './styles.module.css';

export default function Match ({match}) {

  const minutes = Math.floor(match.info.gameDuration / 60);
  const seconds = match.info.gameDuration - minutes * 60;

  const winningTeam = match.info.teams[0].win ? 100 : 200;
  const playerTeam = match.info.participants[match.playerIndex].teamId;
  let wonGame = false;
  if (winningTeam === playerTeam) wonGame = true;

  return (
    <div className={wonGame ? styles.playerWon : styles.playerLost}>
      {wonGame ? <div>Victory</div> : <div>Defeat</div>}
      <div>{minutes}m {seconds}s</div>
      <div>{match.info.participants[match.playerIndex].summonerName}</div>
      <div>{match.info.participants[match.playerIndex].championName}</div>
      <div>Champion ID: {match.info.participants[match.playerIndex].championId}</div>
      <div>Summoner spell 1 ID: {match.info.participants[match.playerIndex].summoner1Id}</div>
      <div>Summoner spell 2 ID: {match.info.participants[match.playerIndex].summoner2Id}</div>
      <div>K/D/A: {match.info.participants[match.playerIndex].kills} / {match.info.participants[match.playerIndex].deaths} / {match.info.participants[match.playerIndex].assists}</div>
      <div>Champion level: {match.info.participants[match.playerIndex].champLevel}</div>
      <div>Item IDs:</div>
      <div>{match.info.participants[match.playerIndex].item0}</div>
      <div>{match.info.participants[match.playerIndex].item1}</div>
      <div>{match.info.participants[match.playerIndex].item2}</div>
      <div>{match.info.participants[match.playerIndex].item3}</div>
      <div>{match.info.participants[match.playerIndex].item4}</div>
      <div>{match.info.participants[match.playerIndex].item5}</div>
      <div>{match.info.participants[match.playerIndex].item6}</div>
    </div>
  )
}
