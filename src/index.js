/*
 * LightningChartJS example that showcases creation and styling of Area Series in a layered setting.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const {
    lightningChart,
    AxisTickStrategies,
    UIElementBuilders,
    Themes
} = lcjs

// Create a XY Chart.
const xyChart = lightningChart().ChartXY({
    // theme: Themes.darkGold 
})
    .setTitle('Product version distribution')
    .setMouseInteractions(true)
    .setPadding({ right: 25 })

// Custom tick labels for X Axis.
const reportTableXlable = ['Jan-17', 'Feb-17', 'Mar-17', 'Apr-17', 'May-17', 'Jun-17', 'Jul-17',
    'Aug-17', 'Sep-17', 'Oct-17', 'Nov-17', 'Dec-17']

// Creating AreaSeries
const createAreaSeries = (versionNumber, index) => {
    return xyChart.addAreaSeries()
        .setName(`Version ${versionNumber}`)
        .setCursorResultTableFormatter((builder, series, xValue, yValue) => {
            return builder
                .addRow(series.getName())
                .addRow('Date: ', reportTableXlable[parseInt(xValue)])
                .addRow('Distribution: ' + yValue.toFixed(2))
        });
}

// Create the area series
const V1Area = createAreaSeries(1, 0)
const V2Area = createAreaSeries(2, 2)
const V3Area = createAreaSeries(3, 2)
const V4Area = createAreaSeries(4, 0)
const V5Area = createAreaSeries(5, 1)
const V6Area = createAreaSeries(6, 2)
const V7Area = createAreaSeries(7, 0)
const V8Area = createAreaSeries(8, 1)
const V9Area = createAreaSeries(9, 2)
const V10Area = createAreaSeries(10, 0)
const V11Area = createAreaSeries(11, 1)
const V12Area = createAreaSeries(12, 2)

// DataSet for all versions
const version1 = [{
    x: 'Jan-17', y: 1.3
}, {
    x: 'Feb-17', y: 1.1
}, {
    x: 'Mar-17', y: 1
}, {
    x: 'Apr-17', y: 0.8
}, {
    x: 'May-17', y: 0.7
}, {
    x: 'Jun-17', y: 0.6
}, {
    x: 'Jul-17', y: 0.6
}, {
    x: 'Aug-17', y: 0.5
}, {
    x: 'Sep-17', y: 0.4
}, {
    x: 'Oct-17', y: 0.4
}, {
    x: 'Nov-17', y: 0.3
}, {
    x: 'Dec-17', y: 0.3
}]

const version2 = [{
    x: 'Jan-17', y: 4.9
}, {
    x: 'Feb-17', y: 4
}, {
    x: 'Mar-17', y: 3.7
}, {
    x: 'Apr-17', y: 3.2
}, {
    x: 'May-17', y: 2.8
}, {
    x: 'Jun-17', y: 2.4
}, {
    x: 'Jul-17', y: 2.3
}, {
    x: 'Aug-17', y: 2
}, {
    x: 'Sep-17', y: 1.7
}, {
    x: 'Oct-17', y: 1.5
}, {
    x: 'Nov-17', y: 1.2
}, {
    x: 'Dec-17', y: 1.1
}]

const version3 = [{
    x: 'Jan-17', y: 6.8
}, {
    x: 'Feb-17', y: 5.9
}, {
    x: 'Mar-17', y: 5.4
}, {
    x: 'Apr-17', y: 4.6
}, {
    x: 'May-17', y: 4.1
}, {
    x: 'Jun-17', y: 3.5
}, {
    x: 'Jul-17', y: 3.3
}, {
    x: 'Aug-17', y: 3
}, {
    x: 'Sep-17', y: 2.6
}, {
    x: 'Oct-17', y: 2.2
}, {
    x: 'Nov-17', y: 1.8
}, {
    x: 'Dec-17', y: 1.5
}]

const version4 = [{
    x: 'Jan-17', y: 2
}, {
    x: 'Feb-17', y: 1.7
}, {
    x: 'Mar-17', y: 1.5
}, {
    x: 'Apr-17', y: 1.3
}, {
    x: 'May-17', y: 1.2
}, {
    x: 'Jun-17', y: 1
}, {
    x: 'Jul-17', y: 1
}, {
    x: 'Aug-17', y: 0.9
}, {
    x: 'Sep-17', y: 0.7
}, {
    x: 'Oct-17', y: 0.6
}, {
    x: 'Nov-17', y: 0.5
}, {
    x: 'Dec-17', y: 0.4
}]

const version5 = [{
    x: 'Jan-17', y: 25.2
}, {
    x: 'Feb-17', y: 22.6
}, {
    x: 'Mar-17', y: 20.8
}, {
    x: 'Apr-17', y: 18.8
}, {
    x: 'May-17', y: 17.1
}, {
    x: 'Jun-17', y: 15.1
}, {
    x: 'Jul-17', y: 14.5
}, {
    x: 'Aug-17', y: 13.4
}, {
    x: 'Sep-17', y: 12
}, {
    x: 'Oct-17', y: 10.3
}, {
    x: 'Nov-17', y: 8.6
}, {
    x: 'Dec-17', y: 7.6
}]

const version6 = [{
    x: 'Jan-17', y: 11.3
}, {
    x: 'Feb-17', y: 10.1
}, {
    x: 'Mar-17', y: 9.4
}, {
    x: 'Apr-17', y: 8.7
}, {
    x: 'May-17', y: 7.8
}, {
    x: 'Jun-17', y: 7.1
}, {
    x: 'Jul-17', y: 6.7
}, {
    x: 'Aug-17', y: 6.1
}, {
    x: 'Sep-17', y: 5.4
}, {
    x: 'Oct-17', y: 4.8
}, {
    x: 'Nov-17', y: 3.8
}, {
    x: 'Dec-17', y: 3.5
}]

const version7 = [{
    x: 'Jan-17', y: 22.8
}, {
    x: 'Feb-17', y: 23.3
}, {
    x: 'Mar-17', y: 23.1
}, {
    x: 'Apr-17', y: 23.3
}, {
    x: 'May-17', y: 23.3
}, {
    x: 'Jun-17', y: 21.7
}, {
    x: 'Jul-17', y: 21
}, {
    x: 'Aug-17', y: 20.2
}, {
    x: 'Sep-17', y: 19.2
}, {
    x: 'Oct-17', y: 17.6
}, {
    x: 'Nov-17', y: 15.4
}, {
    x: 'Dec-17', y: 14.4
}]

const version8 = [{
    x: 'Jan-17', y: 24
}, {
    x: 'Feb-17', y: 29.6
}, {
    x: 'Mar-17', y: 31.3
}, {
    x: 'Apr-17', y: 31.2
}, {
    x: 'May-17', y: 31.8
}, {
    x: 'Jun-17', y: 32.2
}, {
    x: 'Jul-17', y: 32
}, {
    x: 'Aug-17', y: 29.7
}, {
    x: 'Sep-17', y: 28.1
}, {
    x: 'Oct-17', y: 25.5
}, {
    x: 'Nov-17', y: 22.7
}, {
    x: 'Dec-17', y: 21.3
}]

const version9 = [{
    x: 'Jan-17', y: 0.3
}, {
    x: 'Feb-17', y: 0.5
}, {
    x: 'Mar-17', y: 2.4
}, {
    x: 'Apr-17', y: 6.6
}, {
    x: 'May-17', y: 10.6
}, {
    x: 'Jun-17', y: 14.2
}, {
    x: 'Jul-17', y: 15.8
}, {
    x: 'Aug-17', y: 19.3
}, {
    x: 'Sep-17', y: 22.3
}, {
    x: 'Oct-17', y: 22.9
}, {
    x: 'Nov-17', y: 20.3
}, {
    x: 'Dec-17', y: 18.1
}]

const version10 = [{
    x: 'Jan-17', y: 0
}, {
    x: 'Feb-17', y: 0.2
}, {
    x: 'Mar-17', y: 0.4
}, {
    x: 'Apr-17', y: 0.5
}, {
    x: 'May-17', y: 0.9
}, {
    x: 'Jun-17', y: 1.6
}, {
    x: 'Jul-17', y: 2
}, {
    x: 'Aug-17', y: 4
}, {
    x: 'Sep-17', y: 6.2
}, {
    x: 'Oct-17', y: 8.2
}, {
    x: 'Nov-17', y: 10.5
}, {
    x: 'Dec-17', y: 10.1
}]

const version11 = [{
    x: 'Jan-17', y: 0
}, {
    x: 'Feb-17', y: 0
}, {
    x: 'Mar-17', y: 0
}, {
    x: 'Apr-17', y: 0
}, {
    x: 'May-17', y: 0
}, {
    x: 'Jun-17', y: 0
}, {
    x: 'Jul-17', y: 0.2
}, {
    x: 'Aug-17', y: 0.5
}, {
    x: 'Sep-17', y: 0.8
}, {
    x: 'Oct-17', y: 4.9
}, {
    x: 'Nov-17', y: 11.4
}, {
    x: 'Dec-17', y: 14
}]

const version12 = [{
    x: 'Jan-17', y: 0
}, {
    x: 'Feb-17', y: 0
}, {
    x: 'Mar-17', y: 0
}, {
    x: 'Apr-17', y: 0
}, {
    x: 'May-17', y: 0
}, {
    x: 'Jun-17', y: 0
}, {
    x: 'Jul-17', y: 0
}, {
    x: 'Aug-17', y: 0
}, {
    x: 'Sep-17', y: 0.3
}, {
    x: 'Oct-17', y: 0.8
}, {
    x: 'Nov-17', y: 3.2
}, {
    x: 'Dec-17', y: 7.5
}]

const axisX = xyChart.getDefaultAxisX()
    .setMouseInteractions(false)
    .setScrollStrategy(undefined)
    // Disable default ticks.
    .setTickStrategy(AxisTickStrategies.Empty)

// Create Custom Axis
let customAxisX = (data, index) => {
    axisX.addCustomTick(UIElementBuilders.AxisTick)
        .setValue(index)
        .setGridStrokeLength(0)
        .setTextFormatter((_) => data[index].x)

}

// Generate Chart
const generateChart = (data, area, createTicks) => {
    data
        .map((p, index) => ({ x: index, y: p.y }))
        .forEach((point, index) => {
            area.add(point)
            if(createTicks){
                customAxisX(data, index)
            }
        })
}

// generating different layered for charts
generateChart(version1, V1Area, true)
generateChart(version2, V2Area)
generateChart(version3, V3Area)
generateChart(version4, V4Area)
generateChart(version5, V5Area)
generateChart(version6, V6Area)
generateChart(version7, V7Area)
generateChart(version8, V8Area)
generateChart(version9, V9Area)
generateChart(version10, V10Area)
generateChart(version11, V11Area)
generateChart(version12, V12Area)

// Enable AutoCursor auto-fill.
xyChart.setAutoCursor((cursor) => cursor
    .setResultTableAutoTextStyle(false)
    .disposeTickMarkerX()
)

xyChart.getDefaultAxisY()
    .setTitle('Percentage')
    .setScrollStrategy(undefined)
    .setInterval(0, 50)
    .setMouseInteractions(false)
