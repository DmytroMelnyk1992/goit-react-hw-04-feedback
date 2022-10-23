import React from 'react';
import { FeedbackTitle } from './Feedback/FeedbackTitle';
import Buttons from './Feedback/Buttons';
import Notification from './Feedback/Notification';
import Statistics from './Feedback/Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  keys = Object.keys(this.state);

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((t, x) => t + x, 0);
  };

  countPositiveFeedbackPercentage = total => {
    if (!this.state.good) {
      return 0;
    }
    return Math.round((100 / total) * this.state.good);
  };

  click = event => {
    const name = event.target.name;
    this.setState({ [name]: this.state[name] + 1 });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
    return (
      <section>
        <h1>Cafe Expresso</h1>
        <div>
          <FeedbackTitle title="Please leave feedback">
            <Buttons options={this.keys} onLeaveFeedback={this.click} />
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
                positivePercentage={positivePercentage}
              />
            )}
          </FeedbackTitle>
        </div>
      </section>
    );
  }
}
