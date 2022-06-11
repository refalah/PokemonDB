import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { API } from "../config/api";
import { useDispatch } from "react-redux";
import { actions } from "../store/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const ModalCatch = ({ data, url }) => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("Still Here");
  const [pokeName, setPokeName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const router = useNavigate();

  const catchNow = async () => {
    try {
      const response = await API.get("/pokemon/catch");
      let chance = response.data.data;
      if (chance == 0) {
        handleShow();
        setStatus("Caught!");
      } else {
        Swal.fire({
          title: "Whoops!",
          icon: "error",
          timer: 2000,
          button: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addPokemon = () => {
    dispatch(
      actions.catchPokemon({
        id: data.id,
        name: pokeName,
        sequence: 1,
        url: url,
      })
    );
    handleClose();
    router("/");
  };

  useEffect(() => {
    setPokeName(data?.name);
  }, [data]);

  return (
    <>
      <Button variant="primary" onClick={catchNow}>
        Catch
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{status}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you caught one!</Modal.Body>
        <Modal.Footer>
          <input
            type="text"
            placeholder="Nickname"
            className="w-100"
            onChange={(e) => setPokeName(e.target.value)}
            value={pokeName}
          />
          <Button variant="primary" onClick={addPokemon}>
            Catch
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCatch;
