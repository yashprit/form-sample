import React from 'react';
import style from './style.css'

const BrowseBox = (props) => {
	return (
    <div>
    	<label className={style.label}>{props.label}</label>
			<input type="file"
			  className={style.new}
        autoFocus="true"
        placeholder={props.placeholder}
        value={props.text}
        onChange={props.handleChange}
        onKeyDown={props.handleSubmit} />
    </div>
	)
}

export default BrowseBox;