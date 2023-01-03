import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";

const inter = Inter({ subsets: ["latin"] });

const DEFAULT_BUTTON_TEXT = "Explore More";

export default function Home() {
  return (
    <>
      <Head>
        <title>Valtech_ Frontend Challenge</title>
        <meta name="description" content="Valtech_ Frontend Challenge App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.parent}>
          <div className={styles.div1}>
            <Card
              subtitle="FRONT-END"
              title="valtech_"
              paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              buttonUrl="https://www.valtech.com/fr-fr/"
              buttonText={DEFAULT_BUTTON_TEXT}
              backgroundImageUrl="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg"
              visibleParagraph={true}
              hover={true}
            />
          </div>
          <div className={styles.div2}>
            <Card
              subtitle="ITALY"
              title="VENICE"
              paragraph="Venice, the capital of northern Italy's Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals."
              buttonUrl="https://fr.wikipedia.org/wiki/Venise#:~:text=Venise%20(en%20italien%20%3A%20Venezia%20%2F,et%20reli%C3%A9es%20par%20435%20ponts."
              buttonText={DEFAULT_BUTTON_TEXT}
              backgroundImageUrl="https://images.pexels.com/photos/3546189/pexels-photo-3546189.jpeg"
              visibleParagraph={false}
              hover={true}
            />
          </div>
          <div className={styles.div3}>
            <Card
              subtitle="GERMANY"
              title="BERLIN"
              paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              buttonUrl="https://fr.wikipedia.org/wiki/Venise#:~:text=Venise%20(en%20italien%20%3A%20Venezia%20%2F,et%20reli%C3%A9es%20par%20435%20ponts."
              buttonText={DEFAULT_BUTTON_TEXT}
              backgroundImageUrl="https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg"
              visibleParagraph={false}
              hover={true}
            />
          </div>
          <div className={styles.div4}>
            <Card
              subtitle="SPAIN"
              title="BARCELONA"
              paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              buttonUrl="https://fr.wikipedia.org/wiki/Venise#:~:text=Venise%20(en%20italien%20%3A%20Venezia%20%2F,et%20reli%C3%A9es%20par%20435%20ponts."
              buttonText={DEFAULT_BUTTON_TEXT}
              backgroundImageUrl="https://images.pexels.com/photos/8204190/pexels-photo-8204190.jpeg"
              visibleParagraph={false}
              hover={true}
            />
          </div>
          <div className={styles.div5}>
            <Card
              subtitle="FRANCE"
              title="PARIS"
              paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              buttonUrl="https://fr.wikipedia.org/wiki/Venise#:~:text=Venise%20(en%20italien%20%3A%20Venezia%20%2F,et%20reli%C3%A9es%20par%20435%20ponts."
              buttonText={DEFAULT_BUTTON_TEXT}
              backgroundImageUrl="https://images.pexels.com/photos/460740/pexels-photo-460740.jpeg"
              visibleParagraph={false}
              hover={true}
            />
          </div>
          <div className={styles.div6}>
            <Card
              subtitle="ITALY"
              title="VENICE"
              paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              buttonUrl="https://fr.wikipedia.org/wiki/Venise#:~:text=Venise%20(en%20italien%20%3A%20Venezia%20%2F,et%20reli%C3%A9es%20par%20435%20ponts."
              buttonText={DEFAULT_BUTTON_TEXT}
              backgroundImageUrl="https://images.pexels.com/photos/3546189/pexels-photo-3546189.jpeg"
              visibleParagraph={false}
              hover={true}
            />
          </div>
          <div className={styles.div7}>
            <Card
              subtitle="UNITED KINGDOM"
              title="LONDON"
              paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              buttonUrl="https://fr.wikipedia.org/wiki/Venise#:~:text=Venise%20(en%20italien%20%3A%20Venezia%20%2F,et%20reli%C3%A9es%20par%20435%20ponts."
              buttonText={DEFAULT_BUTTON_TEXT}
              backgroundImageUrl="https://images.pexels.com/photos/10960259/pexels-photo-10960259.jpeg"
              visibleParagraph={false}
              hover={true}
            />
          </div>
        </div>
      </main>
    </>
  );
}
