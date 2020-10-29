import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Card } from "react-bootstrap";
//var today = new Date(),
//time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); //rgba(0, 128, 0, 0.5)
const graphdata = {
  datasets: [
    {
      label: "Gas level monitoring",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(0, 128, 0, 0.5)",
      lineTension: 0,
      borderDash: [8, 4],
      data: []
    }
  ]
};
export default function Main() {
  var [fdata, setdata] = useState([]);
  useEffect(() => {
    firebase
      .database()
      .ref()
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setdata({
            ...snapshot.val()
          });
          console.log(snapshot.val());
        }
      });
  }, []);
  const options = {
    scales: {
      xAxes: [
        {
          type: "realtime",
          realtime: {
            onRefresh: function () {
              graphdata.datasets[0].data.push({
                x: Date.now(),
                y: fdata.gasdata
              });
            },
            delay: 2000
          }
        }
      ]
    }
  };
  var msg1, msg2;
  if (fdata.data === 0) {
    msg1 = "no intruder";
  } else if (fdata.data === 1) {
    msg1 = "Alarm on, intruder alert";
  }
  if (fdata.gasdata <= 500) {
    msg2 = "Normal level";
  } else if (fdata.gadata > 500) {
    msg2 = "Leakage detected";
  }
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <Alert variant="primary">PIR sensor reading</Alert>
            <div class="col d-flex justify-content-center">
              <Card
                bg="primary"
                text="white"
                style={{ width: "20rem" }}
                className="mb-2"
              >
                <Card.Header>PIR Status</Card.Header>
                <Card.Body>
                  <Card.Title style={{ textAlign: "left" }}>
                    Sensor reading: {fdata.data}
                  </Card.Title>
                  <Card.Text style={{ textAlign: "left" }}>
                    <strong>message: {msg1}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </div>
          </div>
          <br />
          <div class="col-sm">
            <Alert variant="info">MQ Gas sensor reading</Alert>
            <div class="col d-flex justify-content-center">
              <Card
                bg="info"
                text="white"
                style={{ width: "20rem" }}
                className="mb-2"
              >
                <Card.Header>MQ sensor status</Card.Header>
                <Card.Body>
                  <Card.Title style={{ textAlign: "left" }}>
                    Sensor reading: {fdata.gasdata}
                  </Card.Title>
                  <Card.Text style={{ textAlign: "left" }}>
                    <strong>message: {msg2}</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <br />
        <Alert variant="info">Real-time Gas level montoring</Alert>
        <Line data={graphdata} options={options} />
      </div>
      <a
        href="http://192.168.43.155:8080/jsfs.html"
        class="btn btn-primary btn-lg active mt-5"
        role="button"
        aria-pressed="true"
      >
        View camera feed
      </a>
    </div>
  );
}
