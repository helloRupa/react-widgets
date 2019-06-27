import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

const Root = () => (
  <div>
    <Clock />
    <Tabs content={[
      {title: 'one', content: 'I am first'}, 
      {title: 'two', content: 'I am second'}, 
      {title: 'three', content: 'I am third'}
      ]} 
    />
  </div>
);

export default Root;