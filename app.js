// TODO



var App = () => (
  <div>
    <h1>need to buy</h1>
    <GroceryList items={['cucumbers', 'kale']}/>
  </div>
);

class GroceryListItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      done: false
    };
  }

  onMouseOverItem() {
    this.setState({
      done: !this.state.done
    });
  }

  render(){


    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    };


    return (<li style={style} onMouseOver={this.onMouseOverItem.bind(this)}>{this.props.item}</li>);
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
)


ReactDOM.render(<App/>, document.getElementById("app"));

