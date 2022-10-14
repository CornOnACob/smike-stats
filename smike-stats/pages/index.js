import Head from 'next/head'
import styles from './styles.module.css'
import React, { useState } from 'react';

export default function Home() {

  const [summoner, setSummoner] = useState({});

  const searchSummoner = event => {
    event.preventDefault();
    console.log("Fetching summoner");
    fetch('http://localhost:3000/api/summoner/Doublelift')
    .then((res) => res.json())
    .then(function (summonerData) {
      console.log(summonerData);
      setSummoner(summonerData);
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
        <form onSubmit={searchSummoner} className={styles.summonerNameForm} method="get">
          <label htmlFor="summoner" className={styles.summonerNameItem}>Enter summoner name: </label>
          <input type="text" id="summoner" name="summoner" className={styles.summonerNameItem}></input>
          <button type="submit" className={styles.summonerNameItem}>Submit</button>
        </form>
        {summoner && <div>{summoner.name}</div>}
      </main>
    </div>
  )
}
