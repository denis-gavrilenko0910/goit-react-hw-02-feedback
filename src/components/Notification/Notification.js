import s from './Notification.module.css';

export default function Notification({ message }) {
  return (
    <div className={s.notification__container}>
      <h2 className={s.notification}>{message}</h2>
    </div>
  );
}
