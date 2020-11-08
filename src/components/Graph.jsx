import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import './Graph.css';
import { convertToColour } from '../ColourConversion.js';

function Graph(props){
    const graphRef = useRef(null);
    const prevGraphRef = useRef(null);
    const graphContent = useRef(null);

    var graphConfig = {
        type: "scatter",
        data: {
            datasets: [{
                label: "Mood",
                fill: false,
                showLine: true,
                data: [],
                pointBackgroundColor: [],
                pointBorderColor: [],
                pointRadius: 4
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: "Mood this month"
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Day"
                    },
                    ticks: {
                        min: 0
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Mood"
                    },
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    };

    useEffect(() => {
        if (graphRef.current !== null && prevGraphRef.current !== graphRef.current) {
            graphContent.current = new Chart(graphRef.current, graphConfig);
            console.log(graphContent.current);
        }
        if (graphContent.current !== null) {
            graphConfig.data.datasets[0].data = props.entries.map((entry, index) => ({x: entry.day, y: entry.mood}));
            graphConfig.data.datasets[0].pointBackgroundColor = props.entries.map((entry) => (convertToColour(entry.mood)));
            graphContent.current.update();
        }
        prevGraphRef.current = graphRef;
    })

    return (
        <div className="graph">
            <canvas ref={ graphRef }></canvas>
        </div>
    )
}

export default Graph;
