import useCounter from './hooks/useCounter';

import Card from './Card';

const ForwardCounter = () => {
  const countered = useCounter();

  return <Card>{countered}</Card>;
};

export default ForwardCounter;
