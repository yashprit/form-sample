import React, { Component, PropTypes } from 'react';
import style from './style.css'

class InputBox extends Component {

  static propTypes = {
    label: PropTypes.string,
    updateTextValue: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
    	value: props.value
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      value: nextProps.value
    })
  }

  handleChange = (e) => {
  	this.setState({
  		value: e.target.value
  	})
  }

  handleBlur = (e) => {
  	this.props.onChange(this.state.value);
  }

  render() {
  	return (
      <div>
        <label className={style.label}>{this.props.label}</label>
        <input type={this.props.type}
          className={style.new}
  	      autoFocus="true"
  	      value={this.state.value}
  	      onBlur={this.handleBlur}
  	      onChange={this.handleChange}
          required/>
      </div>
		)
  }
}

export default InputBox;
