import React, { useEffect, useState } from 'react';
import './index.css';

const CompanyList = () => {
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
    <div className=" CompanyList box">
      <div className="tit">版块标题1</div>
      <div className="boxnav" style={{ height: '200px' }}>
        <table
          className="table1"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <tbody>
            <tr>
              <th>业务类型</th>
              <th>计划完成</th>
              <th>实际完成</th>
              <th>增长率</th>
            </tr>
            <tr>
              <td>类型1</td>
              <td>
                <span className="text-w">1000万</span>
              </td>
              <td>
                <span className="text-b">900万</span>
              </td>
              <td>
                <div className="text-d">↑12%</div>
              </td>
            </tr>
            <tr>
              <td>类型1</td>
              <td>
                <span className="text-w">1000万</span>
              </td>
              <td>
                <span className="text-b">900万</span>
              </td>
              <td>
                <div className="text-s">↓12%</div>
              </td>
            </tr>
            <tr>
              <td>类型1</td>
              <td>
                <span className="text-w">1000万</span>
              </td>
              <td>
                <span className="text-b">900万</span>
              </td>
              <td>
                <div className="text-d">↑12%</div>
              </td>
            </tr>
            <tr>
              <td>类型1</td>
              <td>
                <span className="text-w">1000万</span>
              </td>
              <td>
                <span className="text-b">900万</span>
              </td>
              <td>
                <div className="text-s">↓12%</div>
              </td>
            </tr>
            <tr>
              <td>类型1</td>
              <td>
                <span className="text-w">1000万</span>
              </td>
              <td>
                <span className="text-b">900万</span>
              </td>
              <td>
                <div className="text-d">↑12%</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyList;
