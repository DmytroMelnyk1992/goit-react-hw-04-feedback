import PropTypes from 'prop-types';
export default function Buttons({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

Buttons.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
