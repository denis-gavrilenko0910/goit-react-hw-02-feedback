import React from "react";
import Container from "./components/Container";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
        neutral: prevState.neutral + 1,
        bad: prevState.bad + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <Container>
          <Section title="">
            <FeedbackOptions options={onclick} onLeaveFeedback={this.state} />
          </Section>
          <Section title="">
            <Statistics
              good={this.setState}
              neutral={this.setState}
              bad={this.setState}
            ></Statistics>
          </Section>
        </Container>
      </div>
    );
  }
}

export default App;
