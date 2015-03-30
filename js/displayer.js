function ph_gallery()
{
	var xmlhttp;
	if(window.XMLHttpRequest)
	{
		//code for IE7 and other browser
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		//code for IE6 and older version
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange= function()
	{
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			document.getElementById("content").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","ph_gallery.php",true);
	xmlhttp.send();
}
function finder()
{
	var xmlhttp;
	if(window.XMLHttpRequest)
	{
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange= function()
	{
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			document.getElementById("content").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","welcome.php",true);
	xmlhttp.send();
}