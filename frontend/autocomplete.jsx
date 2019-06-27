import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: '' };
    this.updateInput = this.updateInput.bind(this);
    this.updateVal = this.updateVal.bind(this);
    this.setClass = this.setClass.bind(this);
  }

  updateInput(e) {
    this.setState({ inputVal: e.currentTarget.value });
  }

  updateVal(e) {
    this.setState({ inputVal: e.currentTarget.textContent });
  }

  setClass(name) {
    return (!name.toLowerCase().startsWith(this.state.inputVal.toLowerCase())) ? 'hide' : '';
  }

  render() {
    return (
      <div className="autocomplete">
        <input type="text" onChange={this.updateInput} value={this.state.inputVal}></input>
        
        <ul>
          { this.props.names.map(name => (
            <li key={name} 
              onClick={this.updateVal} 
              className={this.setClass(name)}>
                {name}
            </li>)
          ) }
        </ul>
      </div>
    );
  }
}

export default Autocomplete;