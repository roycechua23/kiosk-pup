// function revealModal(){
// 	document.getElementById('modal').style.display = "block";
// }

// function closeModal(){
//     document.getElementById('modal').style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         closeModal();
//     }
//}


// JQUERY AREA


// $(document).ready(function(){ 
// 	$("#modal").css("display", "none");
// });

function revealModal(){
	$("#modal").css("display","block");
}

function closeModal(){
	$("#modal").css("display","none");
}

$(document).on('click', '.balloon', function () {
    // your function here
    revealModal();
});

$(document).on('click', '.region', function () {
    // your function here
    revealModal();
});

// alert('Load finished');