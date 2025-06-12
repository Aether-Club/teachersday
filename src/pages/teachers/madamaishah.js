import Head from "next/head";
import Link from "next/link";
import gsap from "gsap";
import { useEffect } from "react";
import { Inter, Jersey_15 } from "next/font/google";

const jersey_15 = Jersey_15({
    subsets: ["latin"],
    weight: "400"
})

const inter = Inter({
    subsets: ["latin"]
})

export default function MadamAishah() {
    useEffect(() => {
            gsap.fromTo("h1", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 });
            gsap.fromTo("p", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 });
        }, []);
    
    return (
        <>
            <Head>
                <title>To Madam Aishah</title>
                <meta name="description" content="homepage of teachers day" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{
                backgroundColor: "#13073e",
                width: "100%",
                height: "100%",
                minHeight: "100vh",
                position: "fixed",
                overflowY: "auto"
            }}>
                <main style={styles.main}>
                    <h1 style={styles.h1}>To Madam Aishah</h1>
                    <p style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat leo, egestas id tincidunt non, placerat ac ligula. Phasellus tincidunt lacus quis nibh tincidunt, vel placerat nunc facilisis. Donec ac neque condimentum, fermentum nulla dictum, varius urna. Quisque at ex quis diam dignissim pharetra non eu lorem. Cras posuere sed velit vitae fermentum. Vestibulum vehicula vulputate neque, cursus venenatis risus pulvinar sit amet. Aenean finibus sodales tortor ac auctor.</p>
                    <Link style={styles.a} href="/">&lt; back</Link>
                </main>
            </div>
        </>
    )
}

const styles = {
    main: {
        color: "#ffffff",
        fontFamily: inter.style.fontFamily,
        padding: "20px",
        maxWidth: "800px",
        paddingBottom: "100px"
    },
    h1: {
        color: "#c0a3f6",
        fontFamily: jersey_15.style.fontFamily,
        fontSize: "4.2rem",
        marginBottom: "20px"
    },
    p: {
        fontWeight: "500",
        fontSize: "1.6rem",
        marginLeft: "1%",
        marginBottom: "20px"
    },
    a: {
        fontFamily: jersey_15.style.fontFamily,
        fontSize: "2rem"
    }
}