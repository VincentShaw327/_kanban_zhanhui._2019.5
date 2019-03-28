import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import DataSet from "@antv/data-set";

class qualified extends React.Component {
  render() {
    const data = [
      {
        month: "3.1",
        Tokyo: 17.0,
        London: 13.9
      },
      {
        month: "3.2",
        Tokyo: 16.9,
        London: 14.2
      },
      {
        month: "3.3",
        Tokyo: 19.5,
        London: 15.7
      },
      {
        month: "3.4",
        Tokyo: 14.5,
        London: 8.5
      },
      {
        month: "3.5",
        Tokyo: 18.4,
        London: 11.9
      },
      {
        month: "3.6",
        Tokyo: 21.5,
        London: 15.2
      },
      {
        month: "3.7",
        Tokyo: 25.2,
        London: 17.0
      },
      {
        month: "3.8",
        Tokyo: 26.5,
        London: 16.6
      },
      {
        month: "3.9",
        Tokyo: 23.3,
        London: 14.2
      },
    ];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["Tokyo", "London"],
      // 展开字段集
      key: "city",
      // key字段
      value: "temperature" // value字段
    });
    console.log(dv);
    const cols = {
      month: {
        range: [0, 1]
      }
    };
    return (
      <div>
        <Chart 
        height={180} 
        data={dv} 
        padding={[60, 50, 40, 50]}
        scale={cols} 
        forceFit>
          <Legend />
          <Axis 
            name="month"
            label={
                {
                    textStyle: {
                        textAlign: 'center', // 文本对齐方向，可取值为： start center end
                        fill: 'white', // 文本的颜色
                        fontSize: '12', // 文本大小
                        fontWeight: 'bold', // 文本粗细
                        textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
                    }
                }
            }
           />
          <Axis
            name="temperature"
            line={
                {
                    stroke: 'white',
                    fill: 'white',
                    opacity:0.3,
                    lineWidth: 2
                  }
            }
            label={{
              formatter: val => `${val}/%`,
              textStyle: {
                textAlign: 'end', // 文本对齐方向，可取值为： start center end
                fill: 'white', // 文本的颜色
                fontSize: '12', // 文本大小
                fontWeight: 'bold', // 文本粗细
                textBaseline: 'middle' // 文本基准线，可取 top middle bottom，默认为middle
              },
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="line"
            position="month*temperature"
            size={2}
            color={"city"}
          />
          <Geom
            type="point"
            position="month*temperature"
            size={4}
            shape={"circle"}
            color={"city"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
      </div>
    );
  }
}
class yieldRate extends React.Component {
  render() {
    const data = [
      {
        month: "3.1",
        Tokyo: 17.0,
        London: 13.9
      },
      {
        month: "3.2",
        Tokyo: 16.9,
        London: 14.2
      },
      {
        month: "3.3",
        Tokyo: 19.5,
        London: 15.7
      },
      {
        month: "3.4",
        Tokyo: 14.5,
        London: 8.5
      },
      {
        month: "3.5",
        Tokyo: 18.4,
        London: 11.9
      },
      {
        month: "3.6",
        Tokyo: 21.5,
        London: 15.2
      },
      {
        month: "3.7",
        Tokyo: 25.2,
        London: 17.0
      },
      {
        month: "3.8",
        Tokyo: 26.5,
        London: 16.6
      },
      {
        month: "3.9",
        Tokyo: 23.3,
        London: 14.2
      },
    ];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["Tokyo" ],
      // 展开字段集
      key: "city",
      // key字段
      value: "temperature" // value字段
    });
    console.log(dv);
    const cols = {
      month: {
        range: [0, 1]
      },
      temperature:{
        tickCount:2
      }
    };
    return (
      <div>
        <Chart 
        height={168} 
        data={dv} 
        padding={[60, 50, 40, 50]}
        scale={cols} 
        forceFit>
          <Legend />
          <Axis 
            name="month"
            label={
                {
                    textStyle: {
                        textAlign: 'center', // 文本对齐方向，可取值为： start center end
                        fill: 'white', // 文本的颜色
                        fontSize: '12', // 文本大小
                        fontWeight: 'bold', // 文本粗细
                        textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
                    }
                }
            }
           />
          <Axis
            name="temperature"
            line={
                {
                    stroke: 'white',
                    fill: 'white',
                    opacity:0.3,
                    lineWidth: 2
                  }
            }
            label={{
              formatter: val => `${val}/%`,
              textStyle: {
                textAlign: 'end', // 文本对齐方向，可取值为： start center end
                fill: 'white', // 文本的颜色
                fontSize: '12', // 文本大小
                fontWeight: 'bold', // 文本粗细
                textBaseline: 'middle' // 文本基准线，可取 top middle bottom，默认为middle
              },
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="line"
            position="month*temperature"
            size={2}
            color={"city"}
          />
          <Geom
            type="point"
            position="month*temperature"
            size={4}
            shape={"circle"}
            color={"city"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
      </div>
    );
  }
}

export default qualified;
export{
    qualified,yieldRate
}