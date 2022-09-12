var BoxOpened = "";
var ImgOpened = "";
var Counter = 0;
var ImgFound = 0;

var Source = "#boxcard";

var ImgSource = [
    "./Resources/Images/BRBPRINT.png",
    "./Resources/Images/EXIN_Badge_ModuleFoundation_AgileScrum.png",
    "./Resources/Images/Fontys.png",
    "./Resources/Images/HackerU.png",
    "./Resources/Images/ITS-Badges_Software-Development.png",
    "./Resources/Images/JohnBryce.png",
    "./Resources/Images/logo.gif",
    "./Resources/Images/Oracle_Associates_Badge__1_.png"
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
                if(image.includes("BRBPRINT")){
                    $("#CVInfo").empty();
                    $("#CVInfo").append("@The Academy ICT NL <br /> Bootcamp, Computer Software Engineering <br /> July 2022-September 2022 <br />");
                    $("#CVInfo").append("* Object georienteerd programmeren <br /> ");
                    $("#CVInfo").append(" * Java / C# <br /> " );
                    $("#CVInfo").append(" * UML <br /> ");
                    $("#CVInfo").append(" * SQL en Data <br />");
                    $("#CVInfo").append("* Testing <br />");
                    $("#CVInfo").append(" * REST <br />");
                    $("#CVInfo").append(" * JSON <br /> ");
                    $("#CVInfo").append("* Mendix <br />");
                    $("#CVInfo").append("* Javascript / HTML / CSS <br />");
                    $("#CVInfo").append(" * Informatie analyse <br />");
                    $("#CVInfo").append(" * Design Pattern <br /> ");
                    $("#CVInfo").append("* DevOps <br />");
                    $("#CVInfo").append(" * EXIN Agile Scrum Foundation, Pearson VUE * Software Development, Oracle Certified Associate");
                }

                if(image.includes("Oracle")){
                    $("#CVInfo").empty();
                    $("#CVInfo").append("Oracle SE 8 Programmer I: 1Z0-808 <br />  Behaald op 9 September 2022");
                }

                if(image.includes("EXIN")){
                    $("#CVInfo").empty();
                    $("#CVInfo").append("Exin Agile Scrum Foundation <br />  Behaald op 7 Juli 2022");
                }

                if(image.includes("ITS")){
                    $("#CVInfo").empty();
                    $("#CVInfo").append("Pearson Vue: Information Technology Specialist: Software Development <br />  Behaald op 12 Augustus 2022");
                }

                if(image.includes("logo")){
                    $("#CVInfo").empty();
                    $("#CVInfo").append("Software Developer 2016 - 2017 <br /> HIGHSKILLS AND MORE | Tel Aviv <br /> PHP Projecten met Moodle, Drupal, Wordpress en C# projecten met Sharepoint");
                }
                if(image.includes("JohnBryce")){
                    $("#CVInfo").empty();
                    $("#CVInfo").append("C# .Net and Web Development <br /> 2015-2016, Tel Aviv <br /> Skills geleerd:  C#, .NET, ADO.NET, HTML 5, CSS 3, MVC 4, JavaScript,JQuery/JQuery Mobile, ASP.NET ");
                }

                if(image.includes("Hacker")){
                    $("#CVInfo").empty();
                    $("#CVInfo").append("HackerU <br /> Animation and 3D Animation Maya <br /> 2010-2012 <br /> Skills geleerd: Photoshop, Flash, Maya, Illustrator, After Effects, Premiere");
                    $("#CVInfo").append("<br /> Twee films gemaakt:  <br/> Man on the moon: <a href='https://www.youtube.com/watch?v=jjZp-3HyDDc&ab_channel=arelbokobza' target='_blank'> https://www.youtube.com/watch?v=jjZp-3HyDDc&ab_channel=arelbokobza </a> <br /> Bad Hare Day: <a href=' https://vimeo.com/147268732' target='_blank'> https://vimeo.com/147268732 </a>");
                }

                if(image.includes("Fontys")){
                    $("#CVInfo").empty();
                    $("#CVInfo").append("Fontys Bachelor of Physiotherapy <br /> 2018-2022: Niet afgerond maar Propedeuse gehaald en Minor Kinder Fysiotherapie <br /> <br /> Fontys Corona Medewerker <br /> 2022 <br />  Avondlessen gegeven aan eerste- en tweedejaarsstudenten");
                    $("#CVInfo").append("<br /> Fontys Student Ambassador <br /> 2018-2021 <br /> Rondleiding gegeven aan prospectief studenten, Introductie eerste jaars studenten, Unibuddy");
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