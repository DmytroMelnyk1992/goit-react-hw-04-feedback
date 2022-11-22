import css from './Feedback.module.css';

const Buttons = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.buttons_section}>
      {options.map(option => (
        <li key={option} className={css.buttons_colorized}>
          <button onClick={() => onLeaveFeedback(option.toLowerCase())}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Buttons;
