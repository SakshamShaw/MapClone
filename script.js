function initialize(){
var mapOptions ={
    // Zoom of map on start
    zoom:10,
    // Initial center cordinates on start (Asansol)
    center: new google.maps.LatLng(23.7121068,86.9404004), // Type of map (ROADMAP, SATELLITE, HYBRID, TERRAIN)
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    // Minimum zoom of map
    minZoom: 15

    };

    // Create a new map instance using provided options
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Create an info window to display location info
    var infoWindow = new google.maps.InfoWindow();
    
        // Create a marker for example: AEC
        var marker = new google.maps.Marker({
        position: new google.maps.LatLng(23.715609, 86.951584),
        // Attach the marker
        map: map,
        // Tooltip on hover
        });

    // Add click event listener for marker
    marker.addListener('click', function () {
            infowindow.setContent(marker.title);
            infowindow.open(map, marker);
    });
    // Adjust map center when the window is resized
    google.maps.event.addDomListener(window, "resize", function () {
         map.setCenter(mapOptions.center);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
