import React from 'react';
import './style.css';
import News from './news_autoRun';
import Top5List from '../components/Top5List';
export default function App() {
  return (
    <div>
      <News />
      <Top5List />
    </div>
  );
}
