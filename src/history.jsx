import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './history.css';

// Define the image URL for the filter icon
const filterIconUrl = 'https://example.com/filter-icon.png'; // Replace this with your image URL

function History({ progress }) {
  const [datalist, setDataList] = useState([
    {
      name: 'Activity 1',
      description: 'contains the description about the activity 1',
      id: 1,
    },
    {
      name: 'Activity 2',
      description: 'contains the description about the activity 2',
      id: 2,
    },
    {
      name: 'Activity 3',
      description: 'contains the description about the activity 3',
      id: 3,
    },
  ]);

  const handleFilter = () => {
    // Add logic to filter activities
    // For example, you can filter based on certain criteria
    // Update the datalist state with filtered data
  };

  useEffect(() => {
    progress(0);
  }, []);

  return (
    <div className="container-fluid">
      <div className="filter-button">
        {/* Use Button component and include an image */}
        <Button onClick={handleFilter}>
          <img src="public/logo192.png" style={{ marginRight: '8px' }} />
          Filter
        </Button>
      </div>
      <h5 className="h6">Activities</h5>
      {datalist.map((item) => (
        <Link
          key={item.id}
          to={`/history-details/${item.id}`}
          className="activity-link"
        >
          <Card key={item.id} className="card">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Footer>22-10-2020</Card.Footer>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default History;
