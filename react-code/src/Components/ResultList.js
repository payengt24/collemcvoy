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
      {props.data.map(result => <tr key={result.id}>
      <td key={result.id}> {result.name}</td>
      <td key={result.id}> {result.description}</td>
      <td key={result.id}> {result.stars}</td>
      </tr>)} 
  </tbody>
</table>
  </div>

);

export default ResultList;
