import PropTypes from 'prop-types';

const FeedbackItem = ({ children, value, decoration }) => {
  return (
    <li className={children.toLowerCase()}>
      {children}: {value}
      {decoration}
    </li>
  );
};

export default FeedbackItem;

FeedbackItem.propTypes = {
  children: PropTypes.string,
  value: PropTypes.number,
  decoration: PropTypes.string,
};

// const FeedbackItem = ({ children }) => {
//   return <li>{children}</li>;
// };

// export default FeedbackItem;
