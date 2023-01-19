import Navbar from "@/components/Navbar";
import WeatherList from "@/components/WeatherList";
import Head from "next/head";
//import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather App</title>
      </Head>

      <Navbar />

      <main>
        <WeatherList />
      </main>
    </>
  );
}
