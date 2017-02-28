
'use strict';

// CHECK WINDOW RESIZE
var is_windowresize = false;
$(window).resize(function(){
	is_windowresize = true;
});


//INITIALIZE MAP
function initialize() {

	//DEFINE MAP OPTIONS
	//=======================================================================================
	var weddingMapOptions = {
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: new google.maps.LatLng(37.7899456,-122.3964783),
		panControl: true,
		zoomControl: true,
		scrollwheel: false,
		mapTypeControl: false,
		streetViewControl: false,
		overviewMapControl: false,
		scaleControl: true
	};

	// var showerMapOptions = {
	// 	zoom: 18,
	// 	mapTypeId: google.maps.MapTypeId.ROADMAP,
	// 	center: new google.maps.LatLng(41.46444,-82.19018009999999),
	// 	panControl: true,
	// 	zoomControl: true,
	// 	scrollwheel: false,
	// 	mapTypeControl: false,
	// 	streetViewControl: false,
	// 	overviewMapControl: false,
	// 	scaleControl: true
	// };

	//CREATE NEW MAP
	//=======================================================================================
	var weddingMap = new google.maps.Map(document.getElementById('map-canvas-wedding'), weddingMapOptions);
	// var showerMap = new google.maps.Map(document.getElementById('map-canvas-shower'), showerMapOptions);

	//ADD NEW MARKER WITH LABEL
	//=======================================================================================

	// var ceremonyMarker = new MarkerWithLabel({
	// 	position: new google.maps.LatLng(37.791443,-122.389913),
	// 	draggable: false,
	// 	raiseOnDrag: false,
	// 	icon: ' ',
	// 	map: weddingMap,
	// 	labelContent: '<div class="de-icon circle medium-size" style="background-color:#FFF; border:1px solid #f0394d"><i class="de-icon-heart" style="color:#f0394d"></i></div>',
	// 	labelAnchor: new google.maps.Point(29, 20),
	// 	labelClass: "labels" // the CSS class for the label
	// });

	var minnaGalleryMarker = new MarkerWithLabel({
		position: new google.maps.LatLng(37.787306,-122.399371),
		draggable: false,
		raiseOnDrag: false,
		icon: ' ',
		map: weddingMap,
		labelContent: '<div class="de-icon circle medium-size" style="background-color:#FFF; border:1px solid #f6700e"><i class="de-icon-food" style="color:#f6700e"></i></div>',
		labelAnchor: new google.maps.Point(29, 20),
		labelClass: "labels" // the CSS class for the label
	});

	var hotelMarker = new MarkerWithLabel({
		position: new google.maps.LatLng(37.7870494,-122.4128867),
		draggable: false,
		raiseOnDrag: false,
		icon: ' ',
		map: weddingMap,
		labelContent: '<div class="de-icon circle medium-size" style="background-color:#FFF; border:1px solid #0d9a48"><i class="de-icon-home-1" style="color:#0d9a48"></i></div>',
		labelAnchor: new google.maps.Point(29, 20),
		labelClass: "labels" // the CSS class for the label
	});

	// var carissaHomeMarker = new MarkerWithLabel({
	// 	position: new google.maps.LatLng(41.46444,-82.19018009999999),
	// 	draggable: false,
	// 	raiseOnDrag: false,
	// 	icon: ' ',
	// 	map: showerMap,
	// 	labelContent: '<div class="de-icon circle medium-size" style="background-color:#FFF; border:1px solid #f0394d"><i class="de-icon-heart" style="color:#f0394d"></i></div>',
	// 	labelAnchor: new google.maps.Point(29, 20),
	// 	labelClass: "labels" // the CSS class for the label
	// });


	//
	// var marker2 = new MarkerWithLabel({
	//    		position: new google.maps.LatLng(-12.046040, -77.029269),
	//    		draggable: false,
	//    		raiseOnDrag: false,
	//    		icon: ' ',
	//    		map: map,
	//      	labelContent: '<div class="de-icon circle small-size" style="background-color:#6a6a6a"><i class="de-icon-taxi"></i></div>',
	//    		labelAnchor: new google.maps.Point(0, 0),
	//    		labelClass: "labels" // the CSS class for the label
	//  		});
	//
	// var marker3 = new MarkerWithLabel({
	//    		position: new google.maps.LatLng(-12.045909, -77.031712),
	//    		draggable: false,
	//    		raiseOnDrag: false,
	//    		icon: ' ',
	//    		map: map,
	//      	labelContent: '<div class="de-icon circle small-size" style="background-color:#67a80e"><i class="de-icon-food"></i></div>',
	//    		labelAnchor: new google.maps.Point(0, 0),
	//    		labelClass: "labels" // the CSS class for the label
	//  		});
	//
	// var marker4 = new MarkerWithLabel({
	//    		position: new google.maps.LatLng(-12.046617, -77.030567	),
	//    		draggable: false,
	//    		raiseOnDrag: false,
	//    		icon: ' ',
	//    		map: map,
	//      	labelContent: '<div class="de-icon circle small-size" style="background-color:#c89d1b"><i class="de-icon-coffee"></i></div>',
	//    		labelAnchor: new google.maps.Point(0, 0),
	//    		labelClass: "labels" // the CSS class for the label
	//  		});
	//
	// var marker5 = new MarkerWithLabel({
	//    		position: new google.maps.LatLng(-12.045857, -77.032538),
	//    		draggable: false,
	//    		raiseOnDrag: false,
	//    		icon: ' ',
	//    		map: map,
	//      	labelContent: '<div class="de-icon circle small-size" style="background-color:#f0394d"><i class="de-icon-basket"></i></div>',
	//    		labelAnchor: new google.maps.Point(0, 0),
	//    		labelClass: "labels" // the CSS class for the label
	//  		});
	//
	// var marker6 = new MarkerWithLabel({
	//    		position: new google.maps.LatLng(-12.046053, -77.028732),
	//    		draggable: false,
	//    		raiseOnDrag: false,
	//    		icon: ' ',
	//    		map: map,
	//      	labelContent: '<div class="de-icon circle small-size" style="background-color:#f6700e"><i class="de-icon-paper-plane"></i></div>',
	//    		labelAnchor: new google.maps.Point(0, 0),
	//    		labelClass: "labels" // the CSS class for the label
	//  		});
	//
	// var marker7 = new MarkerWithLabel({
	//    		position: new google.maps.LatLng(-12.045363, -77.029939),
	//    		draggable: false,
	//    		raiseOnDrag: false,
	//    		icon: ' ',
	//    		map: map,
	//      	labelContent: '<div class="de-icon circle small-size" style="background-color:#0d9a48"><i class="de-icon-tree"></i></div>',
	//    		labelAnchor: new google.maps.Point(0, 0),
	//    		labelClass: "labels" // the CSS class for the label
	//  		});
	// 	//marker.setMap( map );


	//INFO WINDOWS
	//=======================================================================================

	// Wedding

	// var ceremonyInfoWindow = new google.maps.InfoWindow({
	// 	content: "<div>Ceremony<br />Rincon Park</div>"
	// });
	//
	// google.maps.event.addListener(ceremonyMarker, 'click', function() {
	// 	ceremonyInfoWindow.open(showerMap, ceremonyMarker);
	// });
	//
	// ceremonyInfoWindow.open(weddingMap, ceremonyMarker);

	// Minna
	var minnaInfoWindow = new google.maps.InfoWindow({
		content: "<div>Cocktail Hour &amp; Reception<br />Minna Gallery</div>"
	});

	google.maps.event.addListener(minnaGalleryMarker, 'click', function() {
		minnaInfoWindow.open(weddingMap, minnaGalleryMarker);
	});

	minnaInfoWindow.open(weddingMap, minnaGalleryMarker);

	// Hotel
	var hotelInfoWindow = new google.maps.InfoWindow({
		content: "<div>Hotel Adagio<br />(block of rooms reserved)</div>"
	});

	google.maps.event.addListener(hotelMarker, 'click', function() {
		hotelInfoWindow.open(weddingMap, hotelMarker);
	});

	hotelInfoWindow.open(weddingMap, hotelMarker);

	// Shower

	// var carissaHomeInfoWindow = new google.maps.InfoWindow({
	// 	content: "<div>Wedding Shower<br />Carissa's Childhood Home</div>"
	// });

	// google.maps.event.addListener(carissaHomeMarker, 'click', function() {
	// 	carissaHomeInfoWindow.open(showerMap, carissaHomeMarker);
	// });

	// carissaHomeInfoWindow.open(showerMap, carissaHomeMarker);



	//ON MARKER CLICK EVENTS
	//=======================================================================================
	/*google.maps.event.addListener(marker, 'click', function() {
	map.setZoom(17);
	map.setCenter(marker.getPosition());
	infowindow.open(map,marker);
});

google.maps.event.addListener(marker1, 'click', function() {
map.setZoom(17);
map.setCenter(marker.getPosition());
infowindow1.open(map,marker1);
});

google.maps.event.addListener(marker2, 'click', function() {
map.setZoom(17);
map.setCenter(marker.getPosition());
infowindow1.open(map,marker2);
});*/

//ON BOUND EVENTS AND WINDOW RESIZE
//=======================================================================================
google.maps.event.addListener(weddingMap, 'bounds_changed', function() {
	if (is_windowresize)
	{
		//map.setCenter(marker.getPosition());
		window.setTimeout(function() {
			weddingMap.panTo(minnaGalleryMarker.getPosition());
		}, 500);
	}
	is_windowresize=false;
});

// google.maps.event.addListener(showerMap, 'bounds_changed', function() {
// 	if (is_windowresize)
// 	{
// 		//map.setCenter(marker.getPosition());
// 		window.setTimeout(function() {
// 			showerMap.panTo(marker1.getPosition());
// 		}, 500);
// 	}
// 	is_windowresize=false;
// });

}

// LOAD GMAP
google.maps.event.addDomListener(window, 'load', initialize);
