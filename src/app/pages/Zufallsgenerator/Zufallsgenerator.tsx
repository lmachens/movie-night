import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import BigMovieCard from "../../components/BigMovieCard/BigMovieCard";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import styles from "./Zufallsgenerator.module.css";
import useFetch from "../../hooks/useFetch";
import { MovieResult } from "../../../server/movieDatabase";

export function generateRandomMovieId(): number {
  return Math.floor(Math.random() * 50000) + 1;
}

function Zufallsgenerator(): JSX.Element {
  const [movieId, setMovieId] = useState(generateRandomMovieId);
  const { data: movie } = useFetch<MovieResult>(`/api/movies/${movieId}`);

  if (!movie) {
    return <div></div>;
  }

  return (
    <div className={styles.container}>
      <header>
        <NavBar />
      </header>
      <main>
        <div className={styles.bigMovieCard}>
          <BigMovieCard
            imgSrc={movie.posterPath}
            movieName={movie.title}
            id={movieId}
          />
        </div>
        <div className={styles.button}>
          <Button onClick={() => setMovieId(generateRandomMovieId())}>
            Nächster Film
          </Button>
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Zufallsgenerator;
