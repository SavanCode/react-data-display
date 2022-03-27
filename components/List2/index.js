import React, { useEffect, useState } from 'react';
import './index.css';

const List = () => {
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
    <div className="List boxall" style={{ height: '300px' }}>
      <div className="alltitle">标题样式</div>
      <div className="navboxall">
        <table
          className="table1"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
        >
          <tbody>
            <tr>
              <th scope="col">排名</th>
              <th scope="col">公司</th>
              <th scope="col">数量</th>
              <th scope="col">增长率</th>
            </tr>
            <tr>
              <td>
                <span>1</span>
              </td>
              <td>腾讯科技</td>
              <td>
                114万
                <br />
              </td>
              <td>
                100%
                <br />
              </td>
            </tr>
            <tr>
              <td>
                <span>2</span>
              </td>
              <td>百度公司</td>
              <td>923823万</td>
              <td>21%</td>
            </tr>

            <tr>
              <td>
                <span>3</span>
              </td>
              <td>新浪</td>
              <td>1240253万</td>
              <td>12%</td>
            </tr>
            <tr>
              <td>
                <span>4</span>
              </td>
              <td>网易</td>
              <td>1.2亿</td>
              <td>39%</td>
            </tr>
            <tr>
              <td>
                <span>5</span>
              </td>
              <td>雅虎</td>
              <td>13423万</td>
              <td>9%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
