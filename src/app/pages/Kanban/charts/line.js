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
    const{data}=this.props;
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["qualified", "unqualified"],
      // 展开字段集
      key: "type",
      // key字段
      value: "percent" // value字段
    });
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
            name="percent"
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
            position="month*percent"
            size={2}
            // color={"type"}
            color={['type',['#28CB67','#FF3565']]}
          />
          <Geom
            type="point"
            position="month*percent"
            size={4}
            shape={"circle"}
            color={['type',"white"]}
            // color={"type"}
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
    const{data}=this.props; 
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["YieldRate" ],
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
            // color={['type',['#28CB67','#00BCFF']]}
            color="#28CB67"
          />
          <Geom
            type="point"
            position="month*temperature"
            size={4}
            shape={"circle"}
            color="white"
            // color="#28CB67"
            // color={"city"}
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