// data-set 可以按需引入，除此之外不要引入别的包
import React from 'react';
import { Chart, Axis, Coord, Geom, Guide, Shape } from 'bizcharts';

const { Html, Arc } = Guide;

// 下面的代码会被作为 cdn script 注入 注释勿删
// CDN START
Shape.registerShape('point', 'pointer', {
  drawShape(cfg, group) {
    let point = cfg.points[0]; // 获取第一个标记点
    point = this.parsePoint(point);
    const center = this.parsePoint({ // 获取极坐标系下画布中心点
      x: 0,
      y: 0,
    });
    // 绘制指针
    group.addShape('line', {
      attrs: {
        x1: center.x,
        y1: center.y,
        x2: point.x,
        y2: point.y - 5,
        stroke: cfg.color,
        lineWidth: 3,
        lineCap: 'round',
      },
    });
    return group.addShape('circle', {
      attrs: {
        x: center.x,
        y: center.y,
        r: 4,
        stroke: cfg.color,
        lineWidth: 0.5,
        fill: '#fff',
      },
    });
  },
});


class Gauge extends React.Component {
  render() {
    let {name,value,color}=this.props;
    if(!name){
      name='未知名称'
    }
    const data = [
      { value: value?value:0 },
    ];
    const cols = {
      value: {
        min: 0,
        max: 100,
        tickInterval: 10,
        nice: false,
      },
    };
    return (
      <Chart height={100} data={data} scale={cols} padding={[0, 0, 10, 0]} forceFit>
        <Coord type="polar" startAngle={-9 / 8 * Math.PI} endAngle={1 / 8 * Math.PI} radius={0.85} />
        <Axis
          name="value"
          zIndex={2}
          line={null}
          label={{
            offset: -6,
            textStyle: {
              fontSize: 10,
              textAlign: 'center',
              textBaseline: 'middle',
              fill: 'white',
            },
          }}
          subTickCount={4}
          subTickLine={{
            length: -6,
            stroke: '#fff',
            strokeOpacity: 1,
          }}
          tickLine={{
            length: -8,
            stroke: '#fff',
            strokeOpacity: 1,
          }}
        />
        <Axis name="1" visible={false} />
        <Guide>
          <Arc
            zIndex={0}
            start={[0, 0.965]}
            end={[100, 0.965]}
            style={{ // 底灰色
              stroke: '#CBCBCB',
            //   stroke: 'red',
              lineWidth: 5,
            }}
          />
          <Arc
            zIndex={1}
            start={[0, 0.965]}
            end={[data[0].value, 0.965]}
            style={{
              stroke: color?color:'#1890FF',
              lineWidth: 5,
            }}
          />
          <Html
            position={['50%', '115%']}
            html={
                () => (
                `<div style="width: 100%;color:white;font-size: 10px;
                            text-align: center;>
                            <span style="color:white;margin: 0;">
                                ${name}:
                                <span style="font-size: 14px;font-weight:Bold;color:${color?color:'#1890FF'}; margin-left:5px;">
                                    ${data[0].value}%
                                </span>
                            </span>
                </div>`)
            }
          />
        </Guide>
        <Geom
          type="point"
          position="value*1"
          shape="pointer"
          color="#1890FF"
          active={false}
          style={{ stroke: '#fff', lineWidth: 1 }}
        />
      </Chart>
    );
  }
}

class Metering extends React.Component {
  render() {
    const {value,weight}=this.props;
    const data = [
      { value: value },
    ];
    const cols = {
      value: {
        min: 0,
        max: 100,
        tickInterval: 10,
        nice: false,
      },
    };
    return (
      <Chart height={80}  data={data} scale={cols} padding={[0, 0, 10, 0]} forceFit>
        <Coord type="polar" startAngle={- Math.PI} endAngle={0} radius={0.85} />
        <Axis
          name="value"
          zIndex={2}
          line={null}
          label={null}
          visible={false}
          // subTickCount={4}
          // subTickLine={{
          //   length: -6,
          //   stroke: '#fff',
          //   strokeOpacity: 1,
          // }}
          tickLine={null}
        />
        <Axis name="1" visible={false} />
        <Guide>
          <Arc
            zIndex={0}
            start={[0, 0.965]}
            end={[100, 0.965]}
            style={{ // 底灰色
              stroke: '#CBCBCB',
              //   stroke: 'red',
              lineCap:'round',
              lineWidth: 5,
            }}
          />
          <Arc
            zIndex={1}
            start={[0, 0.965]}
            end={[data[0].value, 0.965]}
            style={{
              stroke: '#FFFF5C',
              lineWidth: 9,
              lineCap:'round'
            }}
          />
          <Html
            position={['50%', '85%']}
            html={
                () => (
                `<div style="width: 100%;color:white;font-size: 10px;
                            text-align: center;>
                            <span style="color:white;margin: 0;">
                                <span style="font-size: 14px;font-weight:Bold;color:white; margin-left:5px;">
                                    ${weight}  KG
                                </span>
                            </span>
                </div>`)
            }
          />
        </Guide>
        <Geom
          // type="point"
          type="path"
          position="value*1"
          // shape="pointer"
          // color="#ffffff00"
          active={false}
          style={{ stroke: '#fff', lineWidth: 1}}
        />
      </Chart>
    );
  }
}

// CDN END
export default Gauge;

export{
  Metering
}