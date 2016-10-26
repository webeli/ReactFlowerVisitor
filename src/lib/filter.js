// Compares ["a", "b", "c"] with ["c", "d", "e"]
export function compareArrays(flower, filter) {
    for	(var i=0;i<filter.length;i++) {
        if ((flower[filter[i]]))
            return true;
    }
    return false;
}

// Itterates all flowers
//
export function sortList(list, filter){
    var sortedList = [];
    list.map(function(flower){
        if (filterFlower(flower, filter)) {
            sortedList.push(flower);
        }
        return true;
    });
    return sortedList;
}

// Compares filter with attributes
export function filterFlower(flower, filter) {
    var shouldReturn = true;
    for (var group in flower.attributes) {
        if(filter[group].length > 0) {
            var found = compareArrays(flower.attributes[group], filter[group]);
            if (!found) {
                shouldReturn = false
            }
        }
    }
    // Check if price range
    if (filter.priceRange) {
        let minVal = filter.priceRange[0];
        let maxVal = filter.priceRange[1];

        if (flower.price < minVal || flower.price > maxVal) {
            shouldReturn = false;
        }

    }
    return shouldReturn;
}