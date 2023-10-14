import { default as PlotlyPlot } from "react-plotly.js";

const Plot = ({ parameters }) => {
    const layout = {
        title: "Estimated Grade Distribution",
        xaxis: {
            title: "Grade",
        },
        yaxis: {
            title: "Probability Density Function",
        },
        width: 809,
        height: 500,
    };

    let data = [];

    if (parameters) {
        const trace1 = {
            x: parameters.x_values.map((value) => value * 84),
            y: parameters.y_values,
            mode: "lines",
            name: "Scaled Logit-Normal",
            showlegend: true,
        };

        data = [trace1];
    }

    return <PlotlyPlot data={data} layout={layout} />;
};

export default Plot;