import React from 'react'
import style from './style.css'

const Button = (props) => {
	if(props.disabled) {
		return (
			<button className={`${style.disabled} ${style.btn}`}>{props.name}</button>
		)
	} else {
		return (
			<button className={`${style.btn}`} onClick={props.handleClick}>{props.name}</button>
		)
	}
}

export default Button