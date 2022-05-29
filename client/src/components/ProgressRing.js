import { RingProgress } from '@ant-design/plots';
export default () => {
  const config = {
    padding: 'auto',
    // autoFit: true,
    width: 250,
    height: 250,
    percent: 0.23,
    color: ['#70cc45', '#b9eda1'],
    appendPadding: 2,
  };
  return <RingProgress {...config} />;
};
