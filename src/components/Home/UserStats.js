import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentLevel } from '../../store/reducers/currentLevel';
import { fetchScoreFromLeaderboard } from '../../store/reducers/userScore';
import { fetchCurrentStreak } from '../../store/reducers/streak';

class UserStats extends Component {
  componentDidMount() {
    const userId = this.props.currentUser;
    this.props.fetchCurrentLevel(userId);
    this.props.fetchScoreFromLeaderboard(userId);
    this.props.fetchCurrentStreak(userId);
  }

  componentDidUpdate() {
    const userId = this.props.currentUser;

    this.props.fetchCurrentLevel(userId);
    this.props.fetchScoreFromLeaderboard(userId);
  }

  render() {
    if (!this.props.currentLevel.length === 0) {
      return null;
    }

    return (
      <div id="user-score" className="card">
        <h1 className="card-header">Stats</h1>
        <div className="stats">
          <h3>Current Level:</h3>
          <p>{this.props.currentLevel}</p>
        </div>
        <div className="stats">
          <h3>Total Score:</h3>
          <p>{this.props.userScore}</p>
        </div>
        <div className="stats">
          <h3>Streak:</h3>
          <p>{this.props.streak}</p>
        </div>
      </div>
    );
  }
}

const mapToState = state => ({
  currentUser: state.currentUser,
  currentLevel: state.currentLevel,
  userScore: state.userScore,
  streak: state.streak,
});

const mapDispatch = {
  fetchCurrentLevel,
  fetchScoreFromLeaderboard,
  fetchCurrentStreak,
};

export default connect(
  mapToState,
  mapDispatch
)(UserStats);
