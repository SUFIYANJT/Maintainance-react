import React from "react";
import './src/barheader.css';
function Create() {
    <div className="container">
    <div className="tabs">
      <input type="radio" id="radio-1" name="tabs" defaultChecked />
      <label className="tab" htmlFor="radio-1">
        <Link
          onClick={() => {
            progress(100);
            setTimeout(() => {
              console.log("navigating...");
              navigateTo('existing');
              progress(0);
            }, 1000);
          }}
          className="a"
          to="/existing"
        >
          Existing
        </Link>
      </label>
      <input type="radio" id="radio-2" name="tabs" />
      <label className="tab" htmlFor="radio-2">
        <Link
          onClick={() => {
            progress(100);
            setTimeout(() => {
              console.log("navigating...");
              navigateTo('issued');
              progress(0);
            }, 1000);
          }}
          className="a"
          to="/issued"
        >
          Issued
        </Link>
      </label>
      <input type="radio" id="radio-3" name="tabs" />
      <label className="tab" htmlFor="radio-3">
        <Link
          onClick={() => {
            progress(100);
            setTimeout(() => {
              console.log("navigating...");
              navigateTo('pending');
              progress(0);
            }, 1000);
          }}
          className="a"
          to="/pending"
        >
          Pending
        </Link>
      </label>
      <input type="radio" id="radio-4" name="tabs" />
      <label className="tab" htmlFor="radio-4">
        <Link
          onClick={() => {
            progress(100);
            setTimeout(() => {
              console.log("navigating...");
              navigateTo('review');
              progress(0);
            }, 1000);
          }}
          className="a"
          to="/review"
        >
          Review
        </Link>
      </label>
      <span className="glider"></span>
    </div>
  </div>
}