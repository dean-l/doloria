function deserialise(string) {
    var markerArray = [];
    var strArray = string.split('|');
    strArray.forEach(element => {
        if (element != ''){
            var marker = element.split(',');
            markerArray.push(marker);
        }
    });
    return markerArray;
}