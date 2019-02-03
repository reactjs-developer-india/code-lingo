import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentLevel, fetchUserTotal } from '../../store';

class UserStats extends Component {
  componentDidMount() {
    const userId = this.props.currentUser;
    this.props.fetchCurrentLevel(userId);
    this.props.fetchUserTotal(userId);
  }

  componentDidUpdate() {
    const userId = this.props.currentUser;

    this.props.fetchCurrentLevel(userId);
    this.props.fetchUserTotal(userId);
  }

  render() {
    console.log('current level', this.props.currentLevel);
    if (!this.props.currentLevel.length === 0) {
      return null;
    }

    console.log('mcrae total score is', this.props.totalScore);

    return (
      <div>
        <div id="user-score">Current Level: {this.props.currentLevel}</div>
        <div id="user-score">Total Score: {this.props.totalScore}</div>
      </div>
    );
  }
}

const mapToState = state => ({
  currentUser: state.currentUser,
  currentLevel: state.currentLevel,
  totalScore: state.totalScore,
});

const mapDispatch = {
  fetchCurrentLevel,
  fetchUserTotal,
};

export default connect(
  mapToState,
  mapDispatch
)(UserStats);
