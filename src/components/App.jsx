import { Component } from 'react';
import Statistics from './FeedbackList/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  isHaveFeedback = false;
  total = 0;
  positivePercentage = 0;
  countPositiveFeedbackPercentage = value => {
    const currentGood = this.state.good + value;
    this.positivePercentage = Math.round((currentGood / this.total) * 100);
  };

  countTotalFeedback = () => {
    this.total =
      Object.values(this.state).reduce((acc, item) => (acc += item), 0) + 1;
  };

  onLeaveFeedback = e => {
    this.setState(prevState => {
      this.countTotalFeedback();
      if (e.target.textContent === 'Good') {
        this.countPositiveFeedbackPercentage(1);
      } else {
        this.countPositiveFeedbackPercentage(0);
      }
      this.isHaveFeedback = true;
      return {
        ...prevState,
        [e.target.textContent.toLowerCase()]:
          prevState[e.target.textContent.toLowerCase()] + 1,
      };
    });
  };

  render() {
    return (
      <div
        style={{
          paddingTop: '100px',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave your feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {this.isHaveFeedback ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.total}
              positivePercentage={this.positivePercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}

// import FeedbackContainer from './FeedbackContainer/FeedbackContainer';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <FeedbackContainer />
//     </div>
//   );
// };
