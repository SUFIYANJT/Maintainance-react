import React, { useState, useEffect } from "react";
import { ProgressBar, Card } from "react-bootstrap";
import './Pending.css';
import './App.css';
import FloatingActionBar from "./components/FloatingActionBar";

function Pending({ progress }) {
  const data = [
    {
      name: "Activity 1",
      description: "contains the description about the activity 1",
      id: 1
    },
    {
      name: "Activity 2",
      description: "contains the description about the activity 2",
      id: 2
    },
    {
      name: "Activity 3",
      description: "contains the description about the activity 3",
      id: 3
    }
  ];

  useEffect(() => {
    progress(0);
  }, []);

  // Set progress value to 80%
  const progressValue = 80;

  return (
    <div className="container-fluid">
      <h5 className="h6"></h5>
      {data.map(item => (
        <Card key={item.id} className="card">
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <ProgressBar now={progressValue} label={`${progressValue}%`} className="bg-black" />
            <span className="text-blue">22-10-2020</span>
          </Card.Footer>
        </Card>
      ))}
      <FloatingActionBar />
    </div>
  );
}

export default Pending;
