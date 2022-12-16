
import PropTypes from "prop-types";
import css from './Statistics.module.css';
import getRandomHexColor from  'components/Color/randomColor';

export default function Statistics ({stats, title}) {
    return (
        <>  
        <section className={css.statics}>
  {title && <h2 className={css.title}>{title}</h2>}
  <ul className={css.statsList}>
  {stats.map(stat => 
    <li className={css.item} key={stat.id} style={{
      backgroundColor: getRandomHexColor(),
    }}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
    </li>)}
  </ul>
</section>
        </>
    );
};

Statistics.prototype = {
  title: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};