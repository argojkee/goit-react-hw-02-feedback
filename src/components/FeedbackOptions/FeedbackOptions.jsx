import ButtonItem from './ButtonItem';
import FeedbackOptionsStyle from './FeedbackoptionsStyle.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <FeedbackOptionsStyle>
      <li>
        <ButtonItem onLeaveFeedback={onLeaveFeedback} children={'Good'} />
      </li>
      <li>
        <ButtonItem onLeaveFeedback={onLeaveFeedback} children={'Neutral'} />
      </li>
      <li>
        <ButtonItem onLeaveFeedback={onLeaveFeedback} children={'Bad'} />
      </li>
    </FeedbackOptionsStyle>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
