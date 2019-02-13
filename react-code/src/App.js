import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ResultList from './Components/ResultList';
import Header from './Components/Header'


class App extends Component {

  state = {
    data: [],
    sort: true,
    caretSymbol: ''
  }

  componentDidMount() {
  this.getData()
  }

  getData = () => {
    axios({
      method: 'GET',
      url: `https://github-trending-api.now.sh/repositories#`
    })
    .then(response =>{
       console.log('GET GIT API', response.data);
       this.setState({
        data: response.data,
        caretSymbol: 'up'
       })
    })
    .catch(error => {
      console.log('error', error);
    })
  }

  handleStarSort = () => {
    console.log(this.state.sort)
    if(this.state.sort === true) {
     let starListdescent =  this.state.data.sort(function (a,b){
        return b.stars - a.stars
      })
      this.setState({
        data: starListdescent,
        sort: !this.state.sort,
        caretSymbol: 'down'
      })
    }

    if(this.state.sort === false) {
      let starListAsescent =  this.state.data.sort(function (a,b){
        return a.stars - b.stars
      })
      this.setState({
        data: starListAsescent,
        sort: !this.state.sort,
        caretSymbol: 'up'
      })
    }  
  }


  render() {
    return (
      <div className="App">
        <Header />
        <ResultList caretSymbol= {this.state.caretSymbol} data={this.state.data} handleStarSort={this.handleStarSort} />

      </div>
    );
  }
}

export default App;
