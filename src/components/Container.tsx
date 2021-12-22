import React, { ReactChild, ReactChildren } from 'react';

interface AuxProps {
  children: ReactChild[] | ReactChildren[];
}

const Container = ({ children }: AuxProps) => {
  return <div className='container'>{children}</div>;
};
export default Container;
