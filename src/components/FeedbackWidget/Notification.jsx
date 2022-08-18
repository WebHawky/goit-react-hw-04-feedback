import { PropTypes } from 'prop-types';
import s from './feedback-widget.module.scss';

export default function Notification({ message }) {
  return <div className={s.notification}>{message}</div>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
