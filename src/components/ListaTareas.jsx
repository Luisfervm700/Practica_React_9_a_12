import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";


function ListaTareas() {
    const [elementos, setElementos] = useState([]);
    const [nuevoElemento, setNuevoElemento] = useState("");

    const agregarElemento = () => {
        if (nuevoElemento.trim() !== "") {
            setElementos([...elementos, nuevoElemento]);
            setNuevoElemento("");
        }
    };

    const borrarElemento = (index) => {
    const nuevosElementos = [...elementos];
        nuevosElementos.splice(index, 1);
        setElementos(nuevosElementos);
    };

    return (
        <div className="container">
        <div className="">
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Elemento</th>
                <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                {elementos.map((elemento, index) => (
                <tr>
                    <td>{elemento}</td>
                    <td>
                        <Button onClick={() => borrarElemento(index)}>Borrar</Button>
                    </td>
                </tr>
                ))}
            </tbody>
            </Table>
            <input
                type="text"
                value={nuevoElemento}
                onChange={(e) => setNuevoElemento(e.target.value)}
            />{" "}{"  "}
                <Button onClick={agregarElemento}>Agregar</Button>
            </div>
        </div>
    );
}

export default ListaTareas;