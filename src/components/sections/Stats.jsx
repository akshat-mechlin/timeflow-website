import React from 'react';
import { STATS } from '../../utils/constants';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats section">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat) => (
            <div key={stat.id} className="stat-item">
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;