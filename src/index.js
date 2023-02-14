//1. Import area
import React from "react";
import ReactDOM from 'react-dom/client';
class A extends React.Component {
  //1. property
  state = {
    name: 'Anand',
    surname: "Verma",
    Address: "Ayodhya",

  }
  //2. Constructor
  onHedingClick = () => {
    this.setState({ ...this.state, name: "Vipin" })
  }

  //3. Method
  render() {
    return <>
      <h1>Oklabs {this.props.name} {this.props.surname} {this.props.children} {this.state.name} {this.state.surname}</h1>
      <h1 onClick={this.onHedingClick}>{this.state.Address}</h1>


    </>

  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<A name="Devanad" surname="Verma">Bhopal</A>);

