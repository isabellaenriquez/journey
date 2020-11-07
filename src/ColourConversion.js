exports.convertToColour = function (score) {
    if (score >= 3) return "#43f751";
    else if (score >= 2) return "#99ff72";
    else if (score >= 1) return "#ccff72";
    else if (score >= 0) return "#f5f578";
    else if (score >= -1) return "#ffcc72";
    else if (score >= -2) return "#ffad72";
    else if (score >= -3) return "#e87272";
}
