/**
Action for location, handle api and various action for ui
**/

import fetch from 'isomorphic-fetch'
import FormData from 'form-data'

export const ERROR = 'ERROR';
export const INVALID_FORM = 'INVALID_FORM';
export const FORM_UPLOADING = 'FORM_UPLOADING';
export const FORM_UPLOADED = 'FORM_UPLOADED';

function getForm(data){
  var form = new FormData();
  form.append('name', data.name);
  form.append('address', data.address);
  form.append('phone', data.phone);
  form.append('profile', data.profile);
  return form;
}

function formUploaded(response){
  return {
    type: FORM_UPLOADED
  }
}

function formUploadProgress(){
  return {
    type: FORM_UPLOADING
  }
}

function error(){
  return {
    type: ERROR,
  }
}

function invalidForm(){
  return {
    type: INVALID_FORM,
  }
}

export function formUpload(stateObject){
  return dispatch => {
    dispatch(formUploadProgress())
    const form = getForm(stateObject)
    return fetch("/form", {method: 'post', body:form})
      .then(response => dispatch(formUploaded(response)))
  }
}
