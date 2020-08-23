import React, { Component } from 'react';

export default function withCounter (WrappedComponent) {
  return class extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            counter: 0,
            name: 'Luis Felipe'
        }
    }

    handleName = () => {
        this.setState({name: 'Raquel'})
    }


    incrementCounter = () => {
        // this.setState(prevState => {
        //     return { counter: prevState.counter + 1 }
        // })  

        this.setState({counter: counter + 1})
    };

    render() { 
      return <WrappedComponent counter={this.state.counter} incrementCounter={this.incrementCounter} name={this.state.name} nameHandler={this.handleName} />
    }
  };
} 