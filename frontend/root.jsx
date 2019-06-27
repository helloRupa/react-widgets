import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';

const names = ['Mulberry', 'Chihuaha', 'Cranston', 'Xanadu', 'Zygote', 'Ant', 'Deb', 'Charlie', 'Munster'];

const Root = () => (
  <div>
    <Clock />
    <Weather />
    <div className="flex-row">
      <Tabs content={[
        {title: 'one', content: 'I am first'}, 
        {title: 'two', content: 'I am second'}, 
        {title: 'three', content: 'I am third'}
      ]} />
      <Autocomplete names={names} />
    </div>
  </div>
);

export default Root;