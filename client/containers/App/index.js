
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as FormActions from '../../actions/form'
import style from './style.css'

class App extends Component {
  render() {
    const { currentState, isFetching, isComplete, actions} = this.props

    return (
      <div className={style.normal}>
        <Header setLocation={actions.setLocation} />
        <MainSection currentState={currentState} actions={actions} isFetching={isFetching} isComplete={isComplete}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {currentState, isFetching, isComplete} = state.form;

  return {
    currentState: currentState,
    isFetching: isFetching,
    isComplete: isComplete
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FormActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
