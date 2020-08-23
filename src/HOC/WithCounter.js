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

        this.setState({counter: this.counter + 1})
    };

    render() { 
      return <WrappedComponent counter={this.state.counter} incrementCounter={this.incrementCounter} name={this.state.name} nameHandler={this.handleName} />
    }
  };
} 



// WITHOUT REFACTORING

// import React, { Component } from 'react';

// export default function withCounter (WrappedComponent) {
//   return class extends Component {
    
//     constructor(props){
//         super(props)

//         this.state = {
//             counter: 0,
//             name: 'Luis Felipe',
//             arrayOfThing: []
//         }
//     }

//     handleName = () => {
//         this.setState({name: 'Raquel'})
//     }


//     incrementCounter = () => {

//         console.log(this.state.counter)

//         if (this.state.counter >= 0 && this.state.counter <= 10) {

//           this.setState({ 
//             counter: this.state.counter + 1
//           })

//           this.setState({arrayOfThing: [...this.state.arrayOfThing, 44]})

//         } else {
//           this.setState({
//             counter: 0
//           })
//         }

//         console.log(this.state.arrayOfThing)
//     };

//     render() { 
//       return <WrappedComponent counter={this.state.counter} incrementCounter={this.incrementCounter} name={this.state.name} nameHandler={this.handleName} />
//     }
//   };
// } 