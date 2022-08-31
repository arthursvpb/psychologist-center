import { Card as AntCard } from 'antd';

import './styles.scss';

export const Card = ({ title, number }) => {
  return (
    <AntCard
      size="large"
      title={title}
      style={{
        textAlign: 'center',
        width: 300,
        backgroundColor: 'var(--gray-200)',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
        borderRadius: '10px',
      }}
    >
      <p className="number">{number}</p>
    </AntCard>
  );
};
