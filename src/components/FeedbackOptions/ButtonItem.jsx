import PropTypes from 'prop-types';

const ButtonItem = ({ children, onLeaveFeedback }) => {
  return (
    <button
      className={children.toLowerCase()}
      onClick={onLeaveFeedback}
      type="button"
    >
      {children}
    </button>
  );
};

export default ButtonItem;

ButtonItem.propTypes = {
  children: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};

// const ButtonItem = ({ children, onClick }) => {
//   return (
//     <li>
//       <button type="button" onClick={onClick}>
//         {children}
//       </button>
//     </li>
//   );
// };

// export default ButtonItem;
