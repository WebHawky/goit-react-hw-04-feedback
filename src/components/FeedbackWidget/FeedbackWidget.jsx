import React from 'react';
import s from './feedbackWidget.module.scss';

class FeedbackWidget extends React.Component {
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
    // return toFixed(this.good / this.countTotalFeedback()) * 100;
  };

  countFeedback = propertyName => {
    this.setState(prevState => {
      const value = prevState[propertyName];
      return {
        [propertyName]: value + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();

    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <section className={s.section}>
          <h2>Please leave feedback</h2>
          <div>
            <button
              className={s.button}
              type="button"
              onClick={() => this.countFeedback('good')}
            >
              Good
            </button>
            <button
              className={s.button}
              type="button"
              onClick={() => this.countFeedback('neutral')}
            >
              Neutral
            </button>
            <button
              className={s.button}
              type="button"
              onClick={() => this.countFeedback('bad')}
            >
              Bad
            </button>
          </div>
        </section>
        <section className={s.section}>
          <h2>Statistics</h2>
          <ul className={s.statList}>
            <li className={s.statListItem}>Good:{good}</li>
            <li className={s.statListItem}>Neutral:{neutral}</li>
            <li className={s.statListItem}>Bad:{bad}</li>
            <li className={s.statListItem}>Total:{total}</li>
            <li className={s.statListItem}>Positive feedback:{percentage}%</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default FeedbackWidget;
