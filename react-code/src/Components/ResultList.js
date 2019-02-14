import React from "react";


const ResultList = props => (

  <div id="container">
  <table id="dataTable">
  <thead>
      <tr>
          <th>Name</th>
          <th>Description</th>
          <th className="sorting pointer" onClick={props.handleStarSort}>Stars <span className={props.caretSymbol}>&#94;</span></th>
      </tr>
  </thead>
  <tbody>
      {props.data.map((result, i) => <tr key={i}>
      <td>{result.name}</td>
      <td>{result.description}</td>
      <td>{result.stars}</td>
      </tr>)} 
  </tbody>
</table>
  </div>

);

export default ResultList;
