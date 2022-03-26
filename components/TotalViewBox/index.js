import React, { useEffect, useState } from 'react';
import './index.css';

const TotalViewBox = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // realTimeDataAPI.get().then(
    //   (result) => {
    //     setEmployeeRealTimeData(result.data.employeeRealTimeData)
    //   },
    //   (error) => console.log("error")
    // )
  };

  return (
    <div
      className=" TotalViewBox boxall"
      style={{ height: 'calc(40% - 0.15rem)' }}
    >
      <div className="alltitle">模块标题</div>
      <div className="sycm">
        <ul className="clearfix">
          <li>
            <h2>1824</h2>
            <span>华东地区</span>
          </li>
          <li>
            <h2>1920</h2>
            <span>华西地区</span>
          </li>
          <li>
            <h2>19%</h2>
            <span>华南地区</span>
          </li>

          <li>
            <h2>1824</h2>
            <span>华北地区</span>
          </li>
          <li>
            <h2>1824</h2>
            <span>华北地区</span>
          </li>
        </ul>
      </div>
      <div className="boxfoot"></div>
    </div>
  );
};

export default TotalViewBox;
