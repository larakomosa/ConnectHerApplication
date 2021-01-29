import React from 'react';

import function_list from './list';

const buildAdminGraph = (data, methods) => {
  // GRAPHING COLORS GO HERE // ONLY SUPPORTS 10 COLORS AT THIS TIME PLEASE ADD MORE!!
  const keyColors = [
    { backgroundColor: '#F8B195' },
    { backgroundColor: '#F67280' },
    { backgroundColor: '#C06C84' },
    { backgroundColor: '#6C5B7B' },
    { backgroundColor: '#355C7D' },
    { backgroundColor: '#99B898' },
    { backgroundColor: '#FECEA8' },
    { backgroundColor: '#FF847C' },
    { backgroundColor: '#E84A5F' },
    { backgroundColor: '#2A363B' },
  ];
  // GRAPHING COLORS GO HERE

  //LOGIC
  const keys = Object.keys(data.reducer).length;
  const availableHeight = (1 / keys) * 100;
  const itemHeight = availableHeight.toFixed(1) * 0.8 + '%';
  const margin = availableHeight.toFixed(1) * 0.2 + '%';
  const antiMargin = availableHeight.toFixed(1) * -0.3;
  const mapArray = [];
  const percentageByEntry = [];
  let totalCount = 0;

  for (const [key, value] of Object.entries(data.reducer)) {
    mapArray.push({
      type: function_list.fixAdminChartType(key),
      amount: parseInt(value),
    });
    totalCount += parseInt(value);
  }

  //LOGIC

  methods.handleResults(totalCount);
  const graph = (
    <>
      <div className="chartGraphs">
        {mapArray.map((item, index) => {
          const availableWidthNoCent = (item.amount / totalCount) * 100;
          const availableWidth = `${(item.amount / totalCount) * 100 + '%'}`;
          percentageByEntry.push({
            ...item,
            percentage: availableWidthNoCent.toFixed(2) + ' %',
          });
          let graphDetails;
          if (item.amount !== 0) {
            graphDetails = null;

            // (
            //   <p className="chartGraphItemText">
            //     {`${item.amount} / ${totalCount}`}
            //   </p>
            // );
          }
          return (
            <>
              <div
                className="chartGraphsItem"
                style={{
                  ...keyColors[index],
                  height: itemHeight,
                  width: availableWidth,
                }}
              >
                {graphDetails}
              </div>
              <div
                style={{
                  height: margin,
                }}
              />
            </>
          );
        })}
        <div
          style={{
            height: margin,
            margin: antiMargin,
          }}
        />
        <div className="chartPercentileMarkers">
          <div className="chartMarker-0 chartMarker" />
          <div className="chartMarker-1 chartMarker" />
          <div className="chartMarker-1 chartMarker" />
          <div className="chartMarker-1 chartMarker" />
          <div className="chartMarker-1 chartMarker" />
          <div className="chartMarker-1 chartMarker" />
          <div className="chartMarker-1 chartMarker" />
          <div className="chartMarker-1 chartMarker" />
          <div className="chartMarker-1 chartMarker" />
          <div className="chartMarker-1 chartMarker" />
        </div>
      </div>
      <div className="chartLegend">
        {percentageByEntry.map((item, index) => {
          return (
            <>
              <div
                className="chartLegendItem"
                style={{
                  ...keyColors[index],
                  height: itemHeight,
                }}
              >
                <div className="chartLegendAlignText">
                  <p className="chartLegendItemPercent">{item.percentage}</p>
                  <p className="chartLegendItemText">{item.type}</p>
                </div>
              </div>
              <div style={{ height: margin, width: '100%' }} />
            </>
          );
        })}
      </div>
    </>
  );

  return graph;
};

export default buildAdminGraph;
