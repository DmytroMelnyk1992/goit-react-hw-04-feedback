import css from './Feedback.module.css';
import PropTypes from 'prop-types';
export default function Buttons({ options, onLeaveFeedback }) {
  return (
    <ul className={css.buttons_section}>
      {options.map(option => (
        <li key={option} className={css.buttons_colorized}>
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
