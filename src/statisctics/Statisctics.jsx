import style from './statistics.module.css'
export const Statistics = ({ title, stats }) => {
    return (
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {stats.map((stat, index) => (
            <li className={style.item} key={index}>
              <span className={style.label}>{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  };