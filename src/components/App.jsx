import { useState } from 'react';
import FeedbackWidget from './FeedbackWidget/FeedbackWidget';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }

    const result = (good / total) * 100;
    return Number(result.toFixed(2));
  };

  const countFeedback = ({ target }) => {
    const { name } = target;

    if (name === 'good') {
      setGood(e => e + 1);
      return;
    }

    if (name === 'neutral') {
      setNeutral(e => e + 1);
      return;
    }

    if (name === 'bad') {
      setBad(e => e + 1);
      return;
    }
  };

  return (
    <FeedbackWidget
      state={{ good, neutral, bad }}
      countTotalFeedback={countTotalFeedback}
      countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
      countFeedback={countFeedback}
    />
  );
}
