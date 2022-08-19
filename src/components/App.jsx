import { Component } from 'react';
import FeedbackWidget from './FeedbackWidget/FeedbackWidget';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }

    const result = (this.state.good / total) * 100;
    return Number(result.toFixed(2));
  };

  countFeedback = ({ target }) => {
    const { name } = target;
    this.setState(prevState => {
      const value = prevState[name];
      return {
        [name]: value + 1,
      };
    });
  };
  render() {
    return (
      <FeedbackWidget
        state={this.state}
        countTotalFeedback={this.countTotalFeedback}
        countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        countFeedback={this.countFeedback}
      />
    );
  }
}
