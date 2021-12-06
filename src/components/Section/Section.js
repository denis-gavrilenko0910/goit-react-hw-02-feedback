import s from './Section.module.css';

export default function Section({ children, title }) {
  return (
    <section>
      <h2 className={s.section__title}>{title}</h2>
      {children}
    </section>
  );
}
