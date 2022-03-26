import React, { useEffect, useRef, useState } from 'react';
import './index.css';

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <div className="right-top public-bg">
        <div className="public-title">水质污染TOP5</div>
        <div className="title-nav">
          <div className="top5-ul">
            <ul>
              <li>
                <span>1</span>
                <span>严重</span>
                <span>北京市</span>
                <span>房山区</span>
                <span>重度污染</span>
                <span>15公里</span>
              </li>
              <li>
                <span>1</span>
                <span>严重</span>
                <span>北京市</span>
                <span>房山区</span>
                <span>重度污染</span>
                <span>15公里</span>
              </li>
              <li>
                <span>2</span>
                <span>严重</span>
                <span>上海市</span>
                <span>闵行区</span>
                <span>重度污染</span>
                <span>10公里</span>
              </li>
              <li>
                <span>3</span>
                <span>严重</span>
                <span>北京市</span>
                <span>朝阳区</span>
                <span>重度污染</span>
                <span>9.3公里</span>
              </li>
              <li>
                <span>4</span>
                <span>中度</span>
                <span>广东省</span>
                <span>广州市</span>
                <span>中度污染</span>
                <span>8.6公里</span>
              </li>
              <li>
                <span>5</span>
                <span>中度</span>
                <span>浙江省</span>
                <span>杭州市</span>
                <span>中度污染</span>
                <span>6.6公里</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
