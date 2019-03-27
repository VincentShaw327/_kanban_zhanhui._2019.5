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

class achieveChart extends React.Component {
  render() {
    const data = [
      {
        name: "London",
        "3.1": 18.9,
        "3.2": 28.8,
        "3.3": 39.3,
        "3.4": 81.4,
        "3.5": 47,
        "3.6": 20.3,
        "3.7": 24,
        "3.8": 35.6,
        "3.9": 35.6,
        "3.10": 35.6,
      },
      {
        name: "Berlin",
        "3.1": 12.4,
        "3.2": 23.2,
        "3.3": 34.5,
        "3.4": 99.7,
        "3.5": 52.6,
        "3.6": 35.5,
        "3.7": 37.4,
        "3.8": 42.4,
        "3.9": 42.4,
        "3.10": 42.4,
      }
    ];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8","3.9","3.10"],
      // 展开字段集
      key: "月份",
      // key字段
      value: "月均降雨量" // value字段
    });
    return (
      <div>
        <Chart 
        height={200} 
        data={dv} 
        forceFit
        padding={[60, 50, 40, 50]}
        >
          <Axis name="月份" 
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
          <Axis name="月均降雨量"
            line={
                {
                    stroke: 'white',
                    fill: 'white',
                    opacity:0.3,
                    lineWidth: 2
                  }
            }
            label={
                {
                    textStyle: {
                        textAlign: 'end', // 文本对齐方向，可取值为： start center end
                        fill: 'white', // 文本的颜色
                        fontSize: '12', // 文本大小
                        fontWeight: 'bold', // 文本粗细
                        textBaseline: 'middle' // 文本基准线，可取 top middle bottom，默认为middle
                    },
                    formatter(text, item, index) {
                        let arr = text.split(' ');
                        // return `${arr[0]}\n${arr[1]}`;
                        return `${text}/w`;
                      },
                }
            }
           />
          {/* <Legend /> */}
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="interval"
            position="月份*月均降雨量"
            color={"name"}
            adjust={[
              {
                type: "dodge",
                marginRatio: 1 / 32
              }
            ]}
          />
        </Chart>
      </div>
    );
  }
}

export default achieveChart;