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
    const{data}=this.props;
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8","3.9","3.10"],
      // 展开字段集
      key: "月份",
      // key字段
      value: "产量" // value字段
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
          <Axis name="产量"
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
            position="月份*产量"
            color={['name',['#28CB67','#00BCFF']]}
            // color={"name"}
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

class serviceHistory extends React.Component {
  render() {
    const {data}=this.props;
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      // fields: ["3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8","3.9","3.10"],
      fields: ["apply", "fulfil"],
      // retains: [ 'undone' ],
      // 展开字段集
      key: "type",
      // key字段
      value: "value" // value字段
    });
    const scale = {
      undone: {
        type: 'linear',
        min: 0,
        max: 100,
      },
    };
    return (
      <div>
        <Chart 
        height={270} 
        data={dv} 
        scale={scale}
        forceFit
        padding={[60, 50, 40, 50]}
        >
          <Axis name="month" 
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
          <Axis name="value"
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
            position="month*value"
            color={['type',['#28CB67','#00BCFF']]}
            // color={"type"}
            adjust={[
              {
                type: "dodge",
                marginRatio: 1 / 32
              }
            ]}
          />
          <Geom type="line" position="month*undone" color="#FF3565" size={2} />
        </Chart>
      </div>
    );
  }
}

export default achieveChart;

export{
  achieveChart,
  serviceHistory
}