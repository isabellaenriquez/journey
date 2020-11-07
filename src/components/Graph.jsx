import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import './Graph.css';
import colour from '../ColourConversion.js';

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
            title: {
                display: true,
                text: "Mood over time"
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Time"
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
            graphConfig.data.datasets[0].data = props.entries.map((entry, index) => ({x: index, y: entry.score}));
            graphConfig.data.datasets[0].pointBackgroundColor = props.entries.map((entry) => (colour.convertToColour(entry.score)));
            graphContent.current.update();
        }
        prevGraphRef.current = graphRef;
    })

    return (
        <canvas className="graph" ref={ graphRef }></canvas>
    )
}

export default Graph;
