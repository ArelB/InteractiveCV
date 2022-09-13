var BoxOpened = "";
var ImgOpened = "";
var Counter = 0;
var ImgFound = 0;

var Source = "#boxcard";

var ImgSource = [
    "./Resources/Images/gameController.png",
    "./Resources/Images/note.png",
    "./Resources/Images/television.png",
    "./Resources/Images/tech.png",
    "./Resources/Images/pathe.png",
    "./Resources/Images/piano.png"
];

function RandomFunction(MaxValue, MinValue) {
		return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
	}
	
function ShuffleImages() {
	var ImgAll = $(Source).children();
	var ImgThis = $(Source + " div:first-child");
	var ImgArr = new Array();

	for (var i = 0; i < ImgAll.length; i++) {
		ImgArr[i] = $("#" + ImgThis.attr("id") + " img").attr("src");
		ImgThis = ImgThis.next();
	}
	
		ImgThis = $(Source + " div:first-child");
	
	for (var z = 0; z < ImgAll.length; z++) {
	var RandomNumber = RandomFunction(0, ImgArr.length - 1);

		$("#" + ImgThis.attr("id") + " img").attr("src", ImgArr[RandomNumber]);
		ImgArr.splice(RandomNumber, 1);
		ImgThis = ImgThis.next();
	}
}

function ResetGame() {
	ShuffleImages();
	$(Source + " div img").hide();
	$(Source + " div").css("visibility", "visible");
	Counter = 0;
	$("#success").remove();
	$("#counter").html("" + Counter);
	BoxOpened = "";
	ImgOpened = "";
	ImgFound = 0;
    $("#CVInfo").empty();
	return false;
}

function OpenCard() {
	var id = $(this).attr("id");

	if ($("#" + id + " img").is(":hidden")) {
		$(Source + " div").unbind("click", OpenCard);
	
		$("#" + id + " img").slideDown('fast');

		if (ImgOpened == "") {
			BoxOpened = id;
			ImgOpened = $("#" + id + " img").attr("src");
			setTimeout(function() {
				$(Source + " div").bind("click", OpenCard)
			}, 300);
		} else {
			CurrentOpened = $("#" + id + " img").attr("src");
			if (ImgOpened != CurrentOpened) {
				setTimeout(function() {
					$("#" + id + " img").slideUp('fast');
					$("#" + BoxOpened + " img").slideUp('fast');
					BoxOpened = "";
					ImgOpened = "";
				}, 400);
			} else {
                var image = $( "#" + id + " img").attr("src");
				$("#" + id + " img").parent().css("visibility", "hidden");
				$("#" + BoxOpened + " img").parent().css("visibility", "hidden");
                if(image.includes("tech")){
                    $("#CVInfo").empty();
                    $("#CVInfo").append("Als kind was ik altijd al gefascineerd door technologie. Het begon met computers, en leidde toen tot consoles en gadgets. <br /> Een droom van mijn is om ooit mijn eigen gadget te bouwen en te programmeren.");
                }

                if(image.includes("note")){
                    $("#CVInfo").empty();
                    $("#CVInfo").append("Als liefhebber van muziek speel ik ongeveer 6 jaar piano. Waaronder het componeren van mijn eigen korte composities hier op youtube: <a href='https://www.youtube.com/watch?v=L2pNJvjsG6s&ab_channel=arelbokobza' target='_blank'> Piano compositie</a> <br /><br />Als ik zelf naar muziek luister, is mijn favoriete genre alternatieve rock.");
                }

                if(image.includes("piano")){
                    $("#CVInfo").empty();
                    $("#CVInfo").append("Als liefhebber van muziek speel ik ongeveer 6 jaar piano. Waaronder het componeren van mijn eigen korte composities hier op youtube:<a href='https://www.youtube.com/watch?v=L2pNJvjsG6s&ab_channel=arelbokobza' target='_blank'> Piano compositie</a>  <br /><br />Als ik zelf naar muziek luister, is mijn favoriete genre alternatieve rock.");
                }

                if(image.includes("television")){
                    $("#CVInfo").empty();
                    $("#CVInfo").append("Tv-shows zijn nog een van mijn passies. Ik hou van alle genres van televisie, maar mijn favoriete programma's zouden scrubs en the leftovers moeten zijn.");
                }

                if(image.includes("pathe")){
                    $("#CVInfo").empty();
                    $("#CVInfo").append("Ik ga graag naar de bioscoop, vooral Pathe. Ik ga regelmatig met mijn vriendin naar de nieuwste films.<br /> Een van mijn favoriete films is Gardenstate. Ik hou echt van films met goede karakters en een interessant verhaal.");
                }

                if(image.includes("gameController")){
                    $("#CVInfo").empty();
                    $("#CVInfo").append("Ik hou van video games. Mijn grootste hobby van allemaal, ik begon te gamen op de originele gameboy en tot op de dag van vandaag speel ik nog steeds op moderne consoles zoals de Xbox Series X en pc-gaming.<br /><br /> Mijn interesse in programmeren begon met mijn liefde voor videogames. Ik was gefascineerd door hoe games werkten en hoe mijn acties de gamewereld konden veranderen. Ik heb veel tijd geinvesteerd om te begrijpen hoe het werkte en dit leidde me naar programmeren.");
                }
               
				ImgFound++;
				BoxOpened = "";
				ImgOpened = "";
			}
			setTimeout(function() {
				$(Source + " div").bind("click", OpenCard)
			}, 400);
		}
		Counter++;
		$("#counter").html("" + Counter);

		if (ImgFound == ImgSource.length) {
			$("#counter").prepend('<span id="success">You Found All Pictures With </span>');
            $("#picboc").append("<div><Hello this is my CV/div>")
		}
	}
}

$(function() {

for (var y = 1; y < 3 ; y++) {
	$.each(ImgSource, function(i, val) {
		$(Source).append("<div id=card" + y + i + "><img src=" + val + " style='width:100%;height:100%;' />");
	});
}
	$(Source + " div").click(OpenCard);
	ShuffleImages();
});