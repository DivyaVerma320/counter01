import Card from './Card';
import useCounter from './hooks/useCounter';

const BackwardCounter = () => {
  const countered = useCounter(false);

  return <Card>{countered}</Card>;
};

export default BackwardCounter;
