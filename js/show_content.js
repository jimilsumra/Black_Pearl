function content(msg_nm)
{
	
	/*	var temp = "#" + link_nm;
		//alert(temp);
		$(temp).display = 'block';
		$(temp).toggle(2000);*/
	
	if (msg_nm=="")
	{
		document.getElementById("show_product").innerHTML="";
		return;
	} 
	if (window.XMLHttpRequest)
	{
	  // code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}
	else
	{
	  // code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	  {
		$(document.getElementById("content").innerHTML=xmlhttp.responseText);

	  }
	}
	if(msg_nm == "home")
	{
		xmlhttp.open("GET","welcome.php",true);
		xmlhttp.send();
	}
	else
	{
	xmlhttp.open("GET","get_content.php?nm="+msg_nm,true);
	xmlhttp.send();
	}	
}
///////ABOUT US PAGE CALLING
function about_us(msg_nm)
{
	
	if (msg_nm=="")
	{
		document.getElementById("show_product").innerHTML="";
		return;
	} 
	if (window.XMLHttpRequest)
	{
	  // code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}
	else
	{
	  // code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	  {
		$(document.getElementById("content").innerHTML=xmlhttp.responseText);

	  }
	}
	
	xmlhttp.open("GET","about_us.php?nm="+msg_nm,true);
	xmlhttp.send();
	
}

///////BOOK ONLINE PAGE CALLING
function book_online(temp)
{
	
	if (temp=="")
	{
		document.getElementById("show_product").innerHTML="";
		return;
	} 
	if (window.XMLHttpRequest)
	{
	  // code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}
	else
	{
	  // code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	  {
		$(document.getElementById("content").innerHTML=xmlhttp.responseText);

	  }
	}
	xmlhttp.open("GET","book_online.php?nm="+temp,true);
	xmlhttp.send();
	
}


///////CONTACT US PAGE CALLING
function contact(temp)
{
	
	if (temp=="")
	{
		document.getElementById("show_product").innerHTML="";
		return;
	} 
	if (window.XMLHttpRequest)
	{
	  // code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}
	else
	{
	  // code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	  {
		$(document.getElementById("content").innerHTML=xmlhttp.responseText);

	  }
	}
	xmlhttp.open("GET","contact_us.php?nm="+temp,true);
	xmlhttp.send();
	
}


///////OUR LOCATION PAGE CALLING
function loca(temp)
{
	
	if (temp=="")
	{
		document.getElementById("show_product").innerHTML="";
		return;
	} 
	if (window.XMLHttpRequest)
	{
	  // code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}
	else
	{
	  // code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	  {
		$(document.getElementById("content").innerHTML=xmlhttp.responseText);

	  }
	}
	xmlhttp.open("GET","location.php?nm="+temp,true);
	xmlhttp.send();
	
}
///////FOR PROMO
function promotion()
{
	
	if(window.XMLHttpRequest)
	{
		//code for IE7+, Fierfox, Chrome and opera, safari
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		//code for IE6
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function()
	{
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			$(document.getElementById("content").innerHTML=xmlhttp.responseText);
		}
	}
	
	xmlhttp.open("GET","promo.php",true);
	xmlhttp.send();
}
////////FOR CONTACT CHECKING
function contact_check()
{
	var fnm= document.getElementById('nm').value;
	var email = document.getElementById('email').value;
	var msg = document.getElementById('msg').value;
	var combin = "nm="+fnm + "&email="+email+ "&msg="+msg;
//	alert(combin);
	if(window.XMLHttpRequest)
	{
		//code for IE7+, Fierfox, Chrome and opera, safari
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		//code for IE6
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function()
	{
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			$(document.getElementById("error").innerHTML=xmlhttp.responseText);
		}
	}
	
	xmlhttp.open("GET","contact_check.php?"+combin,true);
	xmlhttp.send();
}