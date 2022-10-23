import css from './Feedback.module.css';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p className={css.container}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
