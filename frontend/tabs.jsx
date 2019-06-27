import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
    this.updateSelected = this.updateSelected.bind(this);
    this.addStyle = this.addStyle.bind(this);
  }

  updateSelected(e) {
    this.setState({ selected: parseInt(e.currentTarget.dataset.id, 10) });
  }

  addStyle(idx) {
    return (idx === this.state.selected) ? 'forward' : 'back';
  }

  render() {
    return (
      <div className="tabs">
        <ul>
        { this.props.content.map((item, idx) => (
          <li key={item.title} data-id={idx} onClick={this.updateSelected} className={this.addStyle(idx)}>
            <h3>{item.title}</h3>
          </li>)
        ) }
        </ul>
        <article>{this.props.content[this.state.selected].content}</article>
      </div>
    );
  }
}

export default Tabs;