exports.convertToColour = function (score) {
    if (score >= 0.8) return "#99ff72";
    else if (score >= 0.5) return "#c2ff72";
    else if (score >= 0.3) return "#f6ff72";
    else if (score >= 0.1) return "#f5f578";
    else if (score >= -0.1) return "#ffcc72";
    else if (score >= -0.4) return "#ffa172";
    else if (score < -0.4) return "#e88672";
}

