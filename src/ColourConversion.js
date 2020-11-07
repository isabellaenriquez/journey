exports.convertToColour = function (score) {
    if (score >= 3) return "#66FF00";
    else if (score >= 2) return "#99FF00";
    else if (score >= 1) return "#CCFF00";
    else if (score >= 0) return "#FFFF00";
    else if (score >= -1) return "#FFCC00";
    else if (score >= -2) return "#FF9900";
    else if (score >= -3) return "#FF6600";
}
