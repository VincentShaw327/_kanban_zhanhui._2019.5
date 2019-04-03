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

class devState extends React.Component {
  render() {
    const { DataView } = DataSet;
    const { Html } = Guide;
    const {data}=this.props
    const dv = new DataView();
    dv.source(data).transform({
      type: "percent",
      field: "count",
      dimension: "item",
      as: "percent"
    });
    const cols = {
      percent: {
        formatter: val => {
          val = val * 100 + "%";
          return val;
        }
      }
    };
    return (
        <Chart
          // height={window.innerHeight}
          width="285"
          height="198"
          data={dv}
          scale={cols}
          padding={[0, 0, 0, 0]}
          forceFit
        >
          <Coord type={"theta"} radius={0.45} innerRadius={0.7} />
          <Axis name="percent" />
          {/* <Legend
            position="right"
            offsetY={-window.innerHeight / 2 + 120}
            offsetX={-100}
          /> */}
          {/* <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
          /> */}
          <Guide>
            <Html
              position={["50%", "50%"]}
              html="<div style=&quot;color:white;font-size:0.5em;text-align: center;width: 10em;&quot;>共200台</div>"
              alignX="middle"
              alignY="middle"
            />
          </Guide>
          <Geom
            type="intervalStack"
            position="percent"
            color={['item',['#B3B3B3','#FFC106',"#FF3565","#28CB67"]]}
            // color="item"
            tooltip={[
              "item*percent",
              (item, percent) => {
                percent = percent * 100 + "%";
                return {
                  name: item,
                  value: percent
                };
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: "#fff",
            }}
          >
            <Label
              content="percent"
              formatter={(val, item) => {
                return item.point.item ;
                // return item.point.item + ": " + val;
              }}
              textStyle={{
                fill:"white"
              }}
            />
          </Geom>
        </Chart>
    );
  }
}

class unqualified extends React.Component {
  render() {
    const {data}=this.props
    const { DataView } = DataSet;
    const { Html } = Guide;
    const dv = new DataView();
    dv.source(data).transform({
      type: "percent",
      field: "count",
      dimension: "item",
      as: "percent"
    });
    const cols = {
      percent: {
        formatter: val => {
          val = val * 100 + "%";
          return val;
        }
      }
    };
    return (
        <Chart
          // height={window.innerHeight}
          width="300"
          height="220"
          data={dv}
          scale={cols}
          padding={[0, 0, 20, 0]}
          forceFit
        >
          <Coord type={"theta"} radius={0.7} innerRadius={0.75} />
          <Axis name="percent" />
          {/* <Legend
            position="right"
            offsetY={-window.innerHeight / 2 + 120}
            offsetX={-100}
          /> */}
          {/* <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
          /> */}
          <Guide>
            <Html
              position={["50%", "50%"]}
              html="<div style=&quot;color:white;font-size:0.5em;text-align: center;width: 10em;&quot;>不良统计</div>"
              alignX="middle"
              alignY="middle"
            />
          </Guide>
          <Geom
            type="intervalStack"
            position="percent"
            color={['item',['#00BCFF','#DF5A6D',"#9A91E4","#F08C37","#00D09D","#367AF7"]]}
            // color="item"
            tooltip={[
              "item*percent",
              (item, percent) => {
                percent = percent * 100 + "%";
                return {
                  name: item,
                  value: percent
                };
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: "#fff",
            }}
          >
            <Label
              content="percent"
              formatter={(val, item) => {
                return item.point.item ;
                // return item.point.item + ": " + val;
              }}
              textStyle={{
                fill:"white"
              }}
            />
          </Geom>
        </Chart>
    );
  }
}

class service extends React.Component {
  render() {
    const { DataView } = DataSet;
    const { Html } = Guide;
    const {data}=this.props
    let sum=0;
    data.forEach(ele=>sum+=ele.count)
    const dv = new DataView();
    dv.source(data).transform({
      type: "percent",
      field: "count",
      dimension: "item",
      as: "percent"
    });
    const cols = {
      percent: {
        formatter: val => {
          val = val * 100 + "%";
          return val;
        }
      }
    };
    return (
        <Chart
          // height={window.innerHeight}
          width="300"
          height="180"
          data={dv}
          scale={cols}
          padding={[0, 0, 20, 0]}
          forceFit
        >
          <Coord type={"theta"} radius={0.7} innerRadius={0.75} />
          <Axis name="percent" />
          <Legend
            name="percent"
            position="left"
            visible={true}
            offsetY={ 10}
            offsetX={0}
          />
          <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
          />
          <Guide>
            <Html
              position={["50%", "50%"]}
              // html="<div style=&quot;color:white;font-size:0.5em;text-align: center;width: 10em;&quot;>不良统计</div>"
              html={`<div style=color:white;font-size:14px;text-align: center;width: 10em;>共${sum}台</div>`}
              alignX="middle"
              alignY="middle"
            />
          </Guide>
          <Geom
            type="intervalStack"
            position="percent"
            color={['item',['#FF3565','#367AF7',"#00D09D"]]}
            // color="item"
            tooltip={[
              "item*percent",
              (item, percent) => {
                percent = percent * 100 + "%";
                return {
                  name: item,
                  value: percent
                };
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: "#fff",
            }}
          >
            <Label
              content="percent"
              formatter={(val, item) => {
                return item.point.item ;
                // return item.point.item + ": " + val;
              }}
              textStyle={{
                fill:"white"
              }}
            />
          </Geom>
        </Chart>
    );
  }
}

export default devState;

export{
    devState,
    unqualified,
    service
}