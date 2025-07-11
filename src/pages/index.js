import Head from "next/head";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import Sprite from "@/pages/components/sprite";

const playfair = Playfair_Display({
  subsets: ["latin"]
})

const inter = Inter({
  subsets: ["latin"]
})

export default function Home() {
  const [selectedTeacher, setSelectedTeacher] = useState();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSelectChange = (e) => {
    setSelectedTeacher(e.target.value);
    setIsButtonDisabled(e.target.value === "teacher");
  }

  const handleButtonClick = () => {
    window.location.href = `/teachers/${selectedTeacher}`;
  };

  useEffect(() => {
    gsap.fromTo("h1", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 });
    gsap.fromTo("p", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 });
  }, []);

  return (
    <>
      <Head>
        <title>To My Dear Teacher</title>
        <meta name="description" content="homepage of teachers day" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{
        backgroundColor: "#ffcbd4",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        position: "fixed",
        overflowY: "auto"
      }}>
        <main style={styles.main}>
          <h1 style={styles.h1}>Happy Teachers&apos; Day 2025</h1>
          <div style={styles.characters}>
            {
              [...Array(30)].map((_, i) => {
                let n;
                i < 10 ? n = `0${i}` : n = `${i}`;
                return <Sprite key={i} sprite={`tile_${n}.png`} style={styles.sprite} interval={Math.random() * 50 + 300} />
              })
            }
          </div>
          <p style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat leo, egestas id tincidunt non, placerat ac ligula. Phasellus tincidunt lacus quis nibh tincidunt, vel placerat nunc facilisis. Donec ac neque condimentum, fermentum nulla dictum, varius urna. Quisque at ex quis diam dignissim pharetra non eu lorem. Cras posuere sed velit vitae fermentum. Vestibulum vehicula vulputate neque, cursus venenatis risus pulvinar sit amet. Aenean finibus sodales tortor ac auctor.</p>
          <div style={{ display: "flex", gap: "10px", width: "100%", padding: "0 30px" }}>
            <select onLoad={handleSelectChange} onChange={handleSelectChange} value={selectedTeacher} style={styles.slct}>
              <option value="teacher">Select a Teacher</option>
              <option value="madamhawa">Madam Hawa</option>
              <option value="madamaishah">Madam Aishah</option>
            </select>
            <button onClick={handleButtonClick} disabled={isButtonDisabled} style={styles.go}>Go</button>
          </div>
        </main>
      </div>
    </>
  )
}

const styles = {
  main: {
    fontFamily: inter.style.fontFamily,
    marginBottom: "100px"
  },
  h1: {
    color: "#eb8b65",
    fontFamily: playfair.style.fontFamily,
    fontWeight: "600",
    fontSize: "4rem",
    marginBottom: "20px",
    padding: "20px"
  },
  p: {
    maxWidth: "800px",
    fontWeight: "500",
    fontSize: "1.6rem",
    marginLeft: "1%",
    marginBottom: "20px",
    padding: "20px"
  },
  slct: {
    fontSize: "1.4rem",
    height: "60px",
    width: "200px",
    borderRadius: "5px",
    backgroundColor: "#ffffff",
    color: "#000000"
  },
  go: {
    fontSize: "1.4rem",
    height: "60px",
    width: "100px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#eb8b65",
    color: "white"
  },
  characters: {
    display: "flex", 
    flexWrap: "wrap",
    gap: "10px", 
    padding: "20px 0", 
    backgroundColor: "#f899a2",
    margin: "20px 0",
    justifyContent: "center"
  },
  sprite: {
    margin: "0 10px"
  }
}
