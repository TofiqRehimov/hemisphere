// import './App.css';
import React, { Component } from 'react';
import HemispHereDisplay from './HemisphereDisplay';


export default class App extends Component {
  
  // componentDidMount(){
  //   veri yukleme ve api almada istifade olunur
  // }
  // componentDidUpdate(){
  //   state,props deyisende data yukleme edilir
  // }
  // componentWillUnmount(){
  //   silme emelyatlari aparilir
  // }

  
  constructor(props){
    super(props)
    this.state = { latitude:null, errorMessage: ''}
  
  }
  
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude
        })
      },
      (error) => {
        this.setState({
          errorMessage: error.message
        })
      }
    
    );
  }
  render() {
      if(this.state.errorMessage && !this.state.latitude){
        return <div> {this.state.errorMessage} </div>
      }
      if(!this.state.errorMessage && this.state.latitude){
        return <div> <HemispHereDisplay latitude = {this.state.latitude} />  </div>
      }
      else{
        return <div> Loading... </div>
      }
  }
}