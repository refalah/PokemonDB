import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Stack } from "react-bootstrap";
import ModalCatch from "../components/ModalCatch";

const Details = () => {
  const router = useNavigate();
  const { id } = useParams();
  const [pokeImage, setPokeImage] = useState();
  const [pokemon, setPokemon] = useState();
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const loadDetails = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json, "SPRITES");
        setPokeImage(json.sprites.other["official-artwork"].front_default);
        setPokemon(json);
      });
  };

  useEffect(() => {
    loadDetails();
  }, []);

  return (
    <div className="container">
      <div onClick={() => router(-1)} className="txt-black heading-4 ">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span className="spn">Back to Home</span>
      </div>
      <div className="w-100">
        <Stack direction="horizontal" className="stacks" gap={2}>
          <img variant="top" src={pokeImage} className="poke-profile" />
          <h3>Caught</h3>
        </Stack>
      </div>
      <ModalCatch data={pokemon} url={url} />
    </div>
  );
};

export default Details;
