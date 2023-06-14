import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";

export function ApiGet() {
    const [data, setData] = useState([]);

    useEffect (() => {
        axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div className="container">
            <h1>Articulos</h1>
            <div className="pos">
                {data.map((post) => (
                    <Card style={{ width: "20rem", margin: "15px", alignItems: "center", padding: "8px" }}>
                        <Card.Img
                            variant="top"
                            src={post.image}
                            style={{ width: "4rem" }}
                        />
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>$ {post.price}</Card.Text>
                            <Card.Text>{post.description}</Card.Text>
                        </Card.Body>
                        <Button variant="primary" style={{ width: "100%"}}>Add Carrito</Button>
                    </Card>
                ))}
            </div>
        </div>
    );
}