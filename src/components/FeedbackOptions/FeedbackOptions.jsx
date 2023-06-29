import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    const [good, neutral, bad] = options;
    return (
      <div className={css.buttons}>
        <button
          className={css.button}
          type="button"
          name={good}
          onClick={onLeaveFeedback}
        >
          Good
        </button>
        <button
          className={css.button}
          type="button"
          name={neutral}
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          className={css.button}
          type="button"
          name={bad}
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
