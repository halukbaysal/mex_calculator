import React from 'react';
import axios from 'axios';

export default class MexCalc extends React.Component {
  state = {
    mexs: [] 
  } 

  componentDidMount(){ 
    setInterval( () => {
      axios.get(`https://api.elrond.com/transactions?from=0&size=10&withScResults=true`)
      .then(
          res => {
              const mexs = res.data;
              this.setState ({mexs});
          }
      )
      .catch(error => console.log(error))
  },1000 );}

  componentWillUnmount(){

  } 

  render(){
      return(
          <ul>
              { 
                  this.state.mexs
                  .map(mex=><li key={mex.nonce}>{mex.fee}</li>)
              }
          </ul>
      )
  } 
}
 