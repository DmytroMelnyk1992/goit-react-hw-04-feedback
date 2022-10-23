import css from './Feedback.module.css';
import PropTypes from 'prop-types';
export const FeedbackTitle = ({ title, children }) => {
  return (
    <div className={css.container}>
      <h2 className={css.container}>{title}</h2>
      {children}
    </div>
  );
};

FeedbackTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
