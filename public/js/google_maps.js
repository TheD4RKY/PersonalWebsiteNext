function initMap(){
	var options={
		zoom:14,
		center:{lat:48.91794048094043, lng:17.092553296227457}
	}
	var map=new google.maps.Map(document.getElementById('map'), options);

	var marker=new google.maps.Marker({
		position:{lat:48.91794048094043, lng:17.092553296227457}, 
		map:map
	});
}