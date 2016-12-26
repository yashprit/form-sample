import React, { Component, PropTypes } from 'react'

import InputBox from '../InputBox'
import BrowseBox from '../BrowseBox'
import Button from '../Button'
import style from './style.css'

class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      form: {},
      currentState: 0
    }
  }

  _update(attribute, value){
    let form = this.state.form || {};
    form[attribute] = value
    this.setState(form)
  }

  updateFile(e){

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onload = (upload) => {
      this._update("profile", upload.target.result)
    };

    reader.readAsDataURL(file);
  }

  updateAddress(value){
    this._update("address", value)
  }

  updatePhone(value){
    this._update("phone", value)
  }

  updateText(value){
    this._update("name", value)
  }

  next(){
    this.setState({
      currentState: ++this.state.currentState
    })
  }

  back(){
    this.setState({
      currentState: --this.state.currentState
    })
  }

  submitForm(){
    this.props.actions.formUpload(this.state.form)
  }

  isFormValid(){
    const form = this.state.form;
    return !!!(form.name && form.address && form.profile && form.phone);
  }

  render() {
  	const {
      actions,
      isFetching,
      isComplete
  	} = this.props;

    const {
      currentState
    } = this.state;

    if(isFetching){
      return (
        <div className={style.formWrapper}>
          <div className={style.progress}>Processing Form...</div>
        </div>
      )
    }

    if(isComplete) {
      return (
        <div className={style.formWrapper}>
          <div className={style.submitted}>Form Submitted</div>
        </div>
      )
    }

  	if(currentState === 0) {
  		return ( 
  			<div className={style.formWrapper}>
  				<InputBox 
            type="text" 
            value={this.state.form.name || ''}
            onChange={this.updateText.bind(this)} 
            label="Name"/>
  				<BrowseBox handleChange={this.updateFile.bind(this)} label="Profile Image"/>
  				<Button handleClick={this.next.bind(this)} name="Next"/>
  			</div>
  		)
  	} else if(currentState === 1){
  		return (
  			<div className={style.formWrapper}>
  				<InputBox
            type="text"
            value={this.state.form.address || ''}
            onChange={this.updateAddress.bind(this)} 
            label="Address"/>
          <Button handleClick={this.back.bind(this)} name="Back"/>
  				<Button handleClick={this.next.bind(this)} name="Next"/>
  			</div>
  		)
  	} else if(currentState === 2){
      const isValid = this.isFormValid();

  		return (
  			<div className={style.formWrapper}>
  				<InputBox 
            type="tel" 
            value={this.state.form.phone}
            onChange={this.updatePhone.bind(this) || ''} 
            label="Phone"/>
          <Button handleClick={this.back.bind(this)} name="Back"/>
  				<Button handleClick={this.submitForm.bind(this)} name="Submit" disabled={isValid}/>
  			</div>
  		)
  	}
  }
}

export default Form;
