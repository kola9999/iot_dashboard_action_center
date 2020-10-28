import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button } from "react-bootstrap";
export default function Jumbo() {
  return (
    <div className="App">
      <Jumbotron class="bg-transparent mt-5">
        <h2>IOT Home Safety System</h2>
        <p>
          Welcome to <strong>IHS panel</strong>. A friendly companion for the
          home systems designed by Kola Reddy Nagendra and team
        </p>
        <p> Explore our features below 👇👇👇</p>
        <Button>continue</Button>
      </Jumbotron>
      <br />
    </div>
  );
}
