import React from 'react';
import Container from './components/Container';
import Section from './components/Section/Section';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import FeedbackOptions from './components/FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrement = item => {
    this.setState(prevState => {
      return {
        [item]: prevState[item] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (prevState, currentValue) => prevState + currentValue,
      0,
    );
  };
  positivePercentage = () => {
    let positivPercent = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100,
    );
    return positivPercent;
  };
  render() {
    const optionsKeys = Object.keys(this.state);
    const optionsAllStateData = Object.entries(this.state);
    const total = this.countTotalFeedback();
    const positivPercent = this.positivePercentage();
    return (
      <Container>
        <Section title="Leave your feedback, please!">
          <FeedbackOptions
            options={optionsKeys}
            onLeaveFeedback={this.handleIncrement}
            countTotalFeedback={this.countTotalFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total && (
            <Statistics
              optionsAllStateData={optionsAllStateData}
              total={total}
              positivPercent={positivPercent}
            />
          )}
          {!total && <Notification message="There are no feedbacks" />}
        </Section>
      </Container>
    );
  }
}
export default App;
