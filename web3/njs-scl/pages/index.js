import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import LotteryEntrance from '../components/LotteryEntrance'
// import ManualHaeder from '../components/ManualHeader'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="스마트계약 추첨" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ManualHaeder /> */}
      <Header />
      <LotteryEntrance />
      안녕하세요
    </div>
  )
}
