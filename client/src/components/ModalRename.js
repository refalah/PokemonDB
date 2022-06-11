import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { API } from "../config/api";
import { useDispatch } from "react-redux";
import { actions } from "../store/index";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const ModalRename = ({ data, url }) => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("Still Here");
  const [pokeName, setPokeName] = useState("");
  const [current, setCurrent] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const router = useNavigate();

  const renameNow = () => {
    dispatch(
      actions.renamePokemon({
        id: data.id,
        name: pokeName,
        sequence: current,
      })
    );
    handleClose();
    router("/");
  };

  const renamePokemon = async () => {
    console.log(data.sequence, "sequence");
    try {
      const response = await API.get(`/pokemon/rename/${data.sequence}`);
      let chance = response.data.data;
      setCurrent(chance);
      console.log(chance, "chance");
      handleShow();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPokeName(data?.name);
    setCurrent(data?.sequence);
  }, [data]);

  return (
    <>
      <button
        variant="success"
        className="btn "
        style={{ background: "lightblue" }}
        onClick={() => renamePokemon()}
      >
        Rename
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Rename Pokemon</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <input
            type="text"
            placeholder="Nickname"
            className="w-100"
            onChange={(e) => setPokeName(e.target.value)}
            value={pokeName}
          />
          <Button variant="primary" onClick={renameNow}>
            Rename
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalRename;
