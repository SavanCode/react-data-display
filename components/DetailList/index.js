import React, { useEffect, useState } from 'react';
import './index.css';

const DetailList = () => {
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
    <div className="hdrightboxtop">
      <h2 className="tith2">今日活动提醒</h2>
      <div className="lefttoday_tit" style={{ height: '4%' }}>
        <p className="fl">状态：已调节</p>
        <p className="fr">时间段：2018-06-10</p>
      </div>
      <div className="left2_table hdleft2_table">
        <ul>
          <li>
            <p className="fl">
              <b>康定市公安局</b>
              <br />
              村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p className="fr pt17">2018-06-22</p>
          </li>
          <li className="bg">
            <p className="fl">
              <b>康定市公安局</b>
              <br />
              村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p className="fr pt17">2018-06-22</p>
          </li>
          <li>
            <p className="fl">
              <b>康定市公安局</b>
              <br />
              村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p className="fr pt17">2018-06-22</p>
          </li>
          <li className="bg">
            <p className="fl">
              <b>康定市公安局</b>
              <br />
              村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p className="fr pt17">2018-06-22</p>
          </li>
          <li>
            <p className="fl">
              <b>康定市公安局</b>
              <br />
              村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p className="fr pt17">2018-06-22</p>
          </li>
          <li className="bg">
            <p className="fl">
              <b>康定市公安局</b>
              <br />
              村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p className="fr pt17">2018-06-22</p>
          </li>
          <li>
            <p className="fl">
              <b>康定市公安局</b>
              <br />
              村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p className="fr pt17">2018-06-22</p>
          </li>
          <li className="bg">
            <p className="fl">
              <b>康定市公安局</b>
              <br />
              村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p className="fr pt17">2018-06-22</p>
          </li>

          <li>
            <p className="fl">
              <b>康定市公安局</b>
              <br />
              村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p className="fr pt17">2018-06-22</p>
          </li>
          <li className="bg">
            <p className="fl">
              <b>康定市公安局</b>
              <br />
              村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p className="fr pt17">2018-06-22</p>
          </li>
          <li>
            <p className="fl">
              <b>康定市公安局</b>
              <br />
              村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p className="fr pt17">2018-06-22</p>
          </li>
          <li className="bg">
            <p className="fl">
              <b>康定市公安局</b>
              <br />
              村名王某因为被隔壁邻居的狗咬了，产生了纠纷，村名报警。
              <br />
            </p>
            <p className="fr pt17">2018-06-22</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailList;
