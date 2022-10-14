import Head from 'next/head'
import styles from './styles.module.css'
import React, { useState } from 'react';
import Match from './Match';

export default function Home() {

  const [matches, setMatches] = useState([]);

  const searchSummoner = event => {
    event.preventDefault();
    const summonerName = event.target.summoner.value;
    fetch(`http://localhost:3000/api/summoner/${summonerName}`)
    .then((res) => res.json())
    .then(function (data) {
      setMatches(data.matches);
      console.log(data.matches);
    })
    .catch(console.error);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>League Stats</title>
        <meta name="description" content="A simple app to get stats for your recent League games!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>League Stats</h1>
        <form onSubmit={searchSummoner} className={styles.summonerNameForm} method="get">
          <label htmlFor="summoner" className={styles.summonerNameItem}>Enter summoner name: </label>
          <input type="text" id="summoner" name="summoner" className={styles.summonerNameItem}></input>
          <button type="submit" className={styles.summonerNameItem}>Submit</button>
        </form>
        {matches && <div>{matches.map((el) => <Match match={el} key={el.info.gameId} className={styles.match}/>)}</div>}
      </main>
    </div>
  )
}
