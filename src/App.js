import React from 'react';
import './style.css';
import News from './news_autoRun';
import Top5List from '../components/Top5List';
import CompanyList from '../components/CompanyList';
import TotalViewBox from '../components/TotalViewBox';
// import List from '../components/List2'; 这里有一个的冲撞
export default function App() {
  return (
    <div>
      <News />
      <Top5List />
      <CompanyList />
      <TotalViewBox />
      {/* <List /> */}
    </div>
  );
}
