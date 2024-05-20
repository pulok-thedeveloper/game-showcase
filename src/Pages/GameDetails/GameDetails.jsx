import { useEffect, useState } from "react";
import DetailSec from "./Details/DetailSec";
import Hero from "./Hero";
import { useParams } from "react-router-dom";

const GameDetails = () => {
    const [game, setGame] = useState();
    const { slug } = useParams();
    console.log(game);

    useEffect(() => {
      fetch("/games.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          const game = data.find((item) =>
            item?.title.toLowerCase().replace(" ", "_") === slug
          );
          setGame(game);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }, [slug]);

  return (
    <div>
      <Hero game={game}></Hero>
      <DetailSec game={game}></DetailSec>
    </div>
  );
};

export default GameDetails;
