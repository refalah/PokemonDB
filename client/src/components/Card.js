import React, { useEffect, useState } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { API } from "../config/api";
import { actions } from "../store";
import ModalRename from "./ModalRename";

const CardMain = ({ data, type }) => {
  const router = useNavigate();
  const [pokeImage, setPokeImage] = useState();
  const [pokeId, setPokeId] = useState();
  const dispatch = useDispatch();

  const loadDetails = () => {
    fetch(data.url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.id, "SPRITES");
        setPokeId(json.id);
        setPokeImage(json.sprites.other["official-artwork"].front_default);
      });
  };

  const releasePokemon = async () => {
    const response = await API.get("/pokemon/release");
    const free = response.data.data;
    if (free) {
      dispatch(actions.releasePokemon(data.id));
    } else {
      Swal.fire({
        title: "Whoops!",
        icon: "error",
        timer: 2000,
        button: false,
      });
    }
  };
  const renamePokemon = () => {
    console.log(data.sequence, "sequence");
  };

  useEffect(() => {
    loadDetails();
  }, [data]);

  return (
    <div>
      <Card style={{ width: "12rem" }}>
        <img variant="top" src={pokeImage} className="poke-image" />
        <Card.Body>
          <Card.Title>
            {data.name} - {data.sequence}
          </Card.Title>
          {type == "og" ? (
            <Button
              variant="primary"
              onClick={() => router(`/pokemon/${pokeId}`)}
            >
              Details
            </Button>
          ) : (
            <div>
              <button
                variant="success"
                className="btn"
                style={{ background: "maroon", color: "white" }}
                onClick={() => releasePokemon()}
              >
                Release
              </button>
              <ModalRename data={data} />
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardMain;
