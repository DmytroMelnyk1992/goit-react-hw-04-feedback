import css from './Feedback.module.css';

const FeedbackTitle = ({ title, children }) => {
  return (
    <div className={css.container}>
      <h2 className={css.container}>{title}</h2>
      {children}
    </div>
  );
};

export default FeedbackTitle;
