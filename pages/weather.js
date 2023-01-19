import Navbar from "@/components/Navbar";
import WeatherList from "@/components/WeatherList";
import Head from "next/head";

export default function Weather() {
  return (
    <div>

      <Navbar />
      
      <Head>
        <title>Weather</title>
      </Head>

      <main>
        <WeatherList />
      </main>

    </div>
  );
}
