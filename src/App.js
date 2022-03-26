import React from 'react';
import './style.css';
import News from './news_autoRun';
import Top5List from '../components/Top5List';
import CompanyList from '../components/CompanyList';
import TotalViewBox from '../components/TotalViewBox';

export default function App() {
  return (
    <div>
      <News />
      <Top5List />
      <CompanyList />
      <TotalViewBox />
    </div>
  );
}
