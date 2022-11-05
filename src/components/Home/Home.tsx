import { Layout } from 'antd';
import React from 'react';
import styles from './Home.less';

interface Props {
  name: string;
}

const Home: React.FC<Props> = (props) => {
  const { name } = props;

  return (
    <Layout>
      <div className={styles['greeting']}>Hello, {name}!</div>
    </Layout>
  );
};

export default Home;
