import Head from 'next/head'
import styles from './styles.module.css'

export default function Home() {

  const searchSummoner = event => {
    event.preventDefault();
    console.log("Fetching summoner");
    fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Doublelift?api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
    .then((res) => res.json())
    .then(function (summoner) {
      console.log(summoner);
    })
    .catch(console.error);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Smike Stats</title>
        <meta name="description" content="A simple app to get stats for your recent League games!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>League Stats</h1>
        <form onSubmit={searchSummoner} className={styles.summonerNameForm}>
          <label for="summoner" className={styles.summonerNameItem}>Enter summoner name: </label>
          <input type="text" id="summoner" name="summoner" className={styles.summonerNameItem}></input>
          <button type="submit" className={styles.summonerNameItem}>Submit</button>
        </form>
        <div>Match</div>
      </main>
    </div>
  )
}
