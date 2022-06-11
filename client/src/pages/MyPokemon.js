import React, { useEffect, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardMain from "../components/Card";
// import data from "../soal test";

const MyPokemon = () => {
  // let pokemon = [];
  const pokemon = useSelector((state) => state.pokemonList);
  console.log(pokemon, "HERE");
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );
  const [nextBtn, setNextBtn] = useState();
  const [prevBtn, setPrevBtn] = useState();

  // const loadData = () => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setPokemon(json.results);
  //       setNextBtn(json.next);
  //       setPrevBtn(json.previous);
  //     });
  // };

  const nextPage = () => {
    setUrl(nextBtn);
  };

  const prevPage = () => {
    setUrl(prevBtn);
  };

  // console.log(pokemon, "POKEMON");

  // useEffect(() => {
  //   loadData();
  // }, [url]);

  return (
    <div className="container">
      <div className="cards">
        <div className="row">
          {pokemon?.map((poke, index) => (
            <div className="col" style={{ padding: 10 }}>
              <CardMain data={poke} type={"mine"} />
            </div>
          ))}
        </div>
      </div>
      <Stack direction="horizontal" className="stacks" gap={3}>
        <button
          variant="success"
          className="btn"
          style={{ background: "lightgreen" }}
          onClick={() => prevPage()}
        >
          Previous
        </button>
        <button
          variant="success"
          className="btn "
          style={{ background: "lightgreen" }}
          onClick={() => nextPage()}
        >
          Next
        </button>
      </Stack>
    </div>
  );
};

export default MyPokemon;
