import React from 'react';
import Container from './components/Container';
import Section from './components/Section/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrement = item => {
    this.setState(prevState => {
      console.log(prevState);
      return {
        [item]: prevState[item] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    let total = Object.values(this.state);
    return total.reduce(
      (prevState, currentValue) => (total = prevState + currentValue),
      0,
    );
  };

  positivePercentage = () => {
    let positivPercent = 0;
    positivPercent = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100,
    );
    console.log(positivPercent);
    return positivPercent;
  };

  render() {
    const total = Object.values(this.state);
    const optionsKeys = Object.keys(this.state);
    const optionsAllStateData = Object.entries(this.state);
    console.log(total);
    return (
      <div>
        <Container>
          <Section title="Leave your feedback, please!">
            <FeedbackOptions
              options={optionsKeys}
              onLeaveFeedback={this.handleIncrement}
              countTotalFeedback={this.countTotalFeedback}
            />
          </Section>
          <Section title="Statistics">
            <Statistics
              optionsAllStateData={optionsAllStateData}
              total={this.countTotalFeedback()}
              positivPercent={this.positivePercentage()}
            />
          </Section>
        </Container>
      </div>
    );
  }
}
export default App;
