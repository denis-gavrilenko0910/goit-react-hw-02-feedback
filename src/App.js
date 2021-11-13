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
  handleIncrement = (item) => {
    this.setState((prevState) => {
      return {
        [item]: prevState[item] + 1,
      };
    });
  };
  render() {
    const optionsKeys = Object.keys(this.state);
    const optionsAllStateData = Object.entries(this.state);
    return (
      <div>
        <Container>
          <Section title="Leave your feedback, please!">
            <FeedbackOptions
              options={optionsKeys}
              onLeaveFeedback={this.handleIncrement}
            />
          </Section>
          <Section title="">
            <Statistics optionsAllStateData={optionsAllStateData} />
          </Section>
        </Container>
      </div>
    );
  }
}
export default App;
