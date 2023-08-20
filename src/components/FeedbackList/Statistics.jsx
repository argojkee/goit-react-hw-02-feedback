import FeedbackItem from './FeedbackItem';
import StatisticsStyle from './StatisticsStyle.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsStyle>
      <FeedbackItem children={'Good'} value={good} />
      <FeedbackItem children={'Neutral'} value={neutral} />
      <FeedbackItem children={'Bad'} value={bad} />
      <FeedbackItem children={'Total'} value={total} />
      <FeedbackItem
        children={'Positive feedback'}
        decoration={'%'}
        value={positivePercentage}
      />
    </StatisticsStyle>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
