exports.convertToColour = function (score) {
    if (score >= 0.8) return "#43f751";
    else if (score >= 0.5) return "#99ff72";
    else if (score >= 0.3) return "#ccff72";
    else if (score >= 0.1) return "#f5f578";
    else if (score >= -0.1) return "#ffcc72";
    else if (score >= -0.4) return "#ffad72";
    else if (score <= -0.6) return "#e87272";
}
