$(document).ready(function () {
	// $('#hero #img-tag').hide(3000);
	// var myVideo = $('#pretzel-video');
	// if ( myVideo.prop('readyState') == 4 ) {
	// 	alert();
	// };


	// $('#video-source').load(function(){
	// 	alert("hello buddy");
	// });

	// $('#pretzel-video').load(function(){
	// 	alert("hello");
	// }).each(function(){
	//   if(this.complete) {
	//     $(this).trigger('load');
	//   }
	// });

// function hideImage(){	
// 	alert("hello-india");
// 	$('#hero #img-tag').hide(3000);
// }


	// var aud = $(".video-playing");
	// aud.onloadstart = function() {
	//     alert("Starting to load video");
	// };
// var video = $('#pretzel-video');
var video = $('#pretzel-video').load();

if(video.readyState == 4) {
        alert("video loaded");
        $('#hero #img-tag').hide();
};

});