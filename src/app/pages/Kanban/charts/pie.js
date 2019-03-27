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
    const data = [
      {
        item: "待机",
        count: 40
      },
      {
        item: "调膜",
        count: 21
      },
      {
        item: "故障",
        count: 17
      },
      {
        item: "运行",
        count: 13
      },
    ];
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
            color="item"
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
    const { DataView } = DataSet;
    const { Html } = Guide;
    const data = [
      {
        item: "表面起膜",
        count: 23
      },
      {
        item: "飞边",
        count: 21
      },
      {
        item: "未填满",
        count: 17
      },
      {
        item: "黑斑",
        count: 13
      },
      {
        item: "变形",
        count: 13
      },
      {
        item: "破裂",
        count: 13
      },
    ];
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
            color="item"
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
    unqualified
}