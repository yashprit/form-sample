import React from 'react'
import Form from '../Form'
import style from './style.css'

const MainSection = (props) => {
  return (
    <section className={style.main}>
      <Form {...props}/>
    </section>
  )
}

export default MainSection
