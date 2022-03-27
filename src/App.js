import React from 'react';
import './style.css';
import News from './news_autoRun';
import Top5List from '../components/Top5List';
import CompanyList from '../components/CompanyList';
import TotalViewBox from '../components/TotalViewBox';
import DetailList from '../components/DetailList';
// 这里有一个的冲撞
// import List from '../components/List2';
export default function App() {
  return (
    <div>
      <News />
      <Top5List />
      <CompanyList />
      <TotalViewBox />
      {/* <List /> */}
      <DetailList />
    </div>
  );
}
