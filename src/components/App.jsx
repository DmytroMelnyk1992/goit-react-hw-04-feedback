import React from 'react';
import { useState } from 'react';
import FeedbackTitle from './Feedback/FeedbackTitle';
import Buttons from './Feedback/Buttons';
import Notification from './Feedback/Notification';
import Statistics from './Feedback/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackState = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();
  const options = ['Good', 'Neutral', 'Bad'];

  return (
    <section>
      <h1>Cafe Expresso</h1>
      <div>
        <FeedbackTitle title="Please leave feedback">
          <Buttons options={options} onLeaveFeedback={feedbackState} />
        </FeedbackTitle>
        <FeedbackTitle title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          )}
        </FeedbackTitle>
      </div>
    </section>
  );
}
