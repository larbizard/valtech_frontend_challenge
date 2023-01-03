import Link from "next/link";
import styles from "../styles/Card.module.css";
import { useState } from "react";

export type CardProps = {
  subtitle: string;
  title: string;
  paragraph: string;
  buttonText: string;
  buttonUrl: string;
  backgroundImageUrl: string;
  visibleParagraph: boolean;
  hover: boolean;
};

const Card = ({
  subtitle,
  title,
  paragraph,
  buttonText,
  buttonUrl,
  backgroundImageUrl,
  visibleParagraph,
  hover,
}: CardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        borderRadius: "6px",
      }}
    >
      <div className={styles.card}>
        <h2>{subtitle}</h2>
        <h3 style={{ fontSize: visibleParagraph ? "5rem" : "2rem" }}>
          {title}
        </h3>
        {hovered && (
          <>
            <p
              style={{
                visibility: visibleParagraph || hovered ? "visible" : "hidden",
              }}
            >
              {paragraph}
            </p>
            {hover && (
              <Link
                style={{ visibility: hovered ? "visible" : "hidden" }}
                href={`${buttonUrl}`}
              >
                <button>{buttonText}</button>
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
