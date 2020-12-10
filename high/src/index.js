import React from 'react'
import { render } from 'react-dom'
import HighCharts from 'highcharts'
import HighChartsReact from 'highcharts-react-official'

const options = {
    chart : {
        type: 'spline'
    },
    title : {
        text: 'My Chart'
    },
    series : [
        {
            data: [1,2,1,4,3,6]
        }
    ]
}

const App = () => (
    <div>
        <HighChartsReact highCharts={HighCharts} options={options} />
    </div>
);

render (<App />, document.getElementById('root'))