export function arePointsNear(checkPoint, centerPoint, km) {
    var ky = 40000 / 360;
    var kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
    var dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
    var dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
    return Math.sqrt(dx * dx + dy * dy) <= km;
}

export function getFloristsNerby(floristsLocations, visitor) {
    const floristsNerby = Object.keys(floristsLocations).map((florist) => {
        const currentFlorist = {lat:floristsLocations[florist].latitude, lng:floristsLocations[florist].longitude};
        const currentVisitor = {lat:visitor.latitude, lng:visitor.longitude};
        const km = Number(floristsLocations[florist].radius);
        // Check if florist delivers to visitor
        if (arePointsNear(currentFlorist, currentVisitor, km)) {
            return florist;
        }
        return undefined;
    });
    const foundFlorists = floristsNerby.filter(function(n){ return n !== undefined });
    return foundFlorists;
}