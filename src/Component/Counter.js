import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {increaseCount, decreaseCount} from '../Actions/counter'

function Counter(props) {
  return (
    <div>
      <h1>Counter: {props.count}</h1>
      <button onClick={props.handleIncrease}> Increase</button>
      <button onClick={props.handleDecrease}> Decrease</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state.counterRDS.count,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleIncrease: increaseCount,
    handleDecrease: decreaseCount,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)