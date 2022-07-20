React;
ReactDOM;

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // this.decrement = this.decrement.bind(this)
    // this.increment = this.increment.bind(this)
  }
  decrement = () => {
    this.setState({count: this.state.count-1})
  }
  increment= () => {
    this.setState({count: this.state.count+1})
  }
  render() {
    const {count} = this.state;
    return React.createElement(React.Fragment, null, 
      React.createElement('h2', null, count),
      React.createElement('button', {onClick:this.decrement}, '-'),
      React.createElement('button', {onClick:this.increment}, '+'),
    );
  }
}
const container = document.getElementById("root");
const element = React.createElement(Counter);

ReactDOM.render(element, container);
