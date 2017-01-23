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

// var content1 = "<p> Tis is content1</p>"
// var title1= "<h2>TITLE ONE</h2>"

// $(document).ready(function(){ 
// 	$("#modal").css("display", "none");
// });


function revealModal(){
	$(".fr").css("display","block");
}

function closeModal(){
	$(".fr").css("display","none");
}

$(document).on('click', '.balloon', function () {
    // your function here
    revealModal();
});

$(document).on('click', '.region', function () {
    // your function here
    revealModal();
});


$(document).on('click', '.info-icon', function () {
    // your function here
    revealModal();
});

$(document).on('click', '#kl', function () {
    // your function here
    closeModal();
});


// alert('Load finished');