import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';

export default function FeedbackWidget({
  state,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  countFeedback,
}) {
  const { good, neutral, bad } = state;
  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={countFeedback}
      />
      {countTotalFeedback ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There's no any feedback" />
      )}
    </Section>
  );
}
