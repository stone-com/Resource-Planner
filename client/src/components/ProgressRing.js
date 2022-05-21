import { RingProgress } from '@ant-design/plots';
export default () => {
  const config = {
    padding: 'auto',
    // autoFit: true,
    width: 250,
    height: 250,
    percent: 0.7,
    color: ['#5B8FF9', '#E8EDF3'],
    appendPadding: 2,
  };
  return <RingProgress {...config} />;
};
