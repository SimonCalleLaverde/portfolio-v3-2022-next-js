import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/HomePage.module.scss"//I'm Modifying

export default function HomePage() {
  return (
    <div>{/*className={ styles.container }*/}

      <Head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <title>Portfolio V3 2022 Next.js</title>
        <meta name="description" content="I create modern and experimental websites designed to create conversion and persuade using copywriting, good design, and strategy for people to take action. I'm a web developer and web designer with 6 years of experience in web development, and 5 years of studies in marketing and advertising. I build high quality hand-crafted professional websites that stand out! I have a background that includes campaigning, branding, linguistics, visual semiotics, and psichology to create sales. I use the latest technologies in 2022 to create awesome fastspeed and engaging websites."/>
        <meta name="author" content="Simón Calle Laverde"/>
        <meta name="keywords" content="web design, web designer, web development, web developer, modern web design, cool web design, professional web design, professional websites, nextjs websites, nextjs developer, prismic cms, freelance web designer, freelance web developer, web freelancer, web design freelancer, web and branding, digital marketing, digital experiences, marketing and advertising, marketing and advertising web, marketing web, online marketing"/>
        <link rel="shortcut icon" href="/public/favicon.ico"/>

        {/* Facebook Sharing */}
        {/*<meta property="og:title" content="Portfolio V3 2022 Next.js"/>*/}
        <meta property="og:description" content="I create modern and experimental websites designed to create conversion. I'm a web developer and web designer with 6 years of experience in web development, and 5 years of studies in marketing and advertising. I have a background that includes campaigning, branding, linguistics, visual semiotics, and psichology to create sales. I use copywriting, good design, and strategy to persuade people to take action."/>
        {/*<meta property="og:image" content="{{ site.url }}/uploads/share.jpg"/>*/}
        <meta property="og:url" content="{{ site.url }}"/>
        <meta property="og:type" content="article"/>{/*From Jekyll Example*/}

        {/* Twitter Sharing */}
        {/*<meta name="twitter:title" content="Portfolio V3 2022 Next.js"/>*/}
        <meta name="twitter:description" content="I create modern and experimental websites designed to create conversion. I'm a web developer and web designer with 6 years of experience in web development, and 5 years of studies in marketing and advertising. I use copywriting, good design, and strategy to persuade people to take action."/>
        {/*<meta name="twitter:image" content="{{ site.url }}/uploads/share.jpg"/>*/}
        <meta name="twitter:domain" content="{{ site.url }}"/>{/*From Jekyll Example*/}
        <meta name="twitter:card" content="summary_large_image"/>

        {/* Reconciling Both Facebook/Twitter */}
        <meta property="og:title" content="Portfolio V3 2022 Next.js"/>
        {/*<meta property="og:description" content="{{ site.description_short_200 }}"/>*/}
        <meta property="og:image" content="{{ site.url }}/uploads/share.jpg"/>
        {/*<meta property="og:url" content="{{ site.url }}"/>
        <meta name="twitter:card" content="summary_large_image"/>*/}

        {/* Non-Essential, But Recommended */}
        {/*Facebook Recommends | Denotes the name of the Web site in which the shared page resides*/}
        <meta property="og:site_name" content="Portfolio V3 2022 Next.js"/>
        {/*Twitter Suggests | This provides an alternative image description for those who are visually impaired*/}
        <meta name="twitter:image:alt" content="Display image of Simón Calle Laverde Portfolio V3 2022 Next.js"/>

        {/* Fonts */}
        <link href="https://db.onlinewebfonts.com/c/4c4c08af466e9ad071b6d69cf44093df?family=Saol+Display+Regular" rel="stylesheet" type="text/css"/>{/*Option 2: "Old+Standard+TT"*/}
      </Head>

      <main className="main">{/*{ styles.main }*/}
        <div className="container">

          {/* Temporary */}
          <h1 className={styles.title}>
            Portfolio V3 2022 Next.js
          </h1>

        </div>
      </main>

      <footer className="footer">{/*{styles.footer}*/}
        <div className="container">
          {/*<a href="" target="_blank">
            <span>
              Powered by{' '}
            </span>

            <span className={ styles.logo }>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
            </span>
          </a>*/}

          <span>
            Designed & Developed by{" "}
          </span>

          <a href="https://simoncallelaverde.github.io/" target="_blank">
            Simón Calle Laverde
          </a>
        </div>
      </footer>

    </div>
  )
}