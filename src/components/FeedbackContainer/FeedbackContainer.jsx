// import ButtonsList from 'components/ButtonsList/ButtonsOptions';
// import FeedbackList from 'components/FeedbackList/FeedbackList';
// import { Component } from 'react';

// class FeedbackContainer extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   total = 0;
//   percentage = 0;

//   countPositiveFeedbackPercentage = value => {
//     const currentGood = this.state.good + value;
//     this.percentage = Math.round((currentGood / this.total) * 100);
//   };

//   countTotalFeedback = () => {
//     this.total =
//       Object.values(this.state).reduce((acc, item) => (acc += item), 0) + 1;
//   };

//   onButtonClick = e => {
//     this.setState(prevState => {
//       this.countTotalFeedback();

//       if (e.target.textContent === 'Good') {
//         this.countPositiveFeedbackPercentage(1);
//       } else {
//         this.countPositiveFeedbackPercentage(0);
//       }

//       return {
//         ...prevState,
//         [e.target.textContent.toLowerCase()]:
//           prevState[e.target.textContent.toLowerCase()] + 1,
//       };
//     });
//   };

//   upFirst(string) {
//     const firstLetter = string[0];
//     const upString = firstLetter.toUpperCase() + string.slice(1, string.length);
//     return upString;
//   }

//   render() {
//     return (
//       <div>
//         <h4>Please leave your feedback</h4>
//         <ButtonsList
//           list={this.state}
//           upString={this.upFirst}
//           onClick={this.onButtonClick}
//         />
//         <h4>Statistics</h4>
//         <FeedbackList
//           total={this.total}
//           percentage={this.percentage}
//           list={this.state}
//           upString={this.upFirst}
//         />
//       </div>
//     );
//   }
// }

// export default FeedbackContainer;
