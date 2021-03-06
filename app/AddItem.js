var React = require('react');

var AddItem = React.createClass({
  getInitialState: function(){
    return {
      newItem: ''
    }
  },
  handleChange: function(e){
    this.setState({
      newItem: e.target.value
    })
  },
  handleSubmit: function(e){
    if(e.keyCode === 13){
      this.props.add(this.state.newItem);
      this.setState({
        newItem: ''
      });
    }
  },
  render: function(){
    return (
      <div className="titleBorder">
      <textarea type="text"
      className="form-control"
      value={this.state.newItem}
      placeholder={this.props.placeholder}
      onKeyDown={this.handleSubmit}
      onChange={this.handleChange}>
      </textarea>
      </div>
    )
  }
});

module.exports = AddItem;
