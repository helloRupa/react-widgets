import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const Root = () => (
  <div>
    <Clock />
    <Weather />
    <Tabs content={[
      {title: 'one', content: 'I am first'}, 
      {title: 'two', content: 'I am second'}, 
      {title: 'three', content: 'I am third'}
      ]} 
    />
  </div>
);

export default Root;