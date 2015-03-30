

function get(temp)
{
	
	var df = document.getElementById("msg_nm");
	var val = df.options[df.selectedIndex].text;
	
	if (temp=="")
	{
		document.getElementById("mins_display").innerHTML="";
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
		$(document.getElementById("mins_display").innerHTML=xmlhttp.responseText);

	  }
	}
	
		xmlhttp.open("GET","get_time.php?val="+val,true);
		xmlhttp.send();
		
}


function chk_save()
{
	
		var timezone = jstz.determine_timezone();
		
		timezone.offset(); // Standard UTC offset for timezone


		var tz=timezone.name(); // Olson timezone key
		
		

		timezone.dst(); // Daylight Saving Time?
	var i=0;
	
if(tz === "Pacific/Auckland")	
{
	var fnm = document.getElementById('fnm').value;
	var lnm = document.getElementById('lnm').value;
	
	var email = document.getElementById('email').value;
	var ph_cell = document.getElementById('ph_cell').value;
	
	var ap_dt = document.getElementById('ap_dt').value;
	
	//Massage name combo
	var df = document.getElementById("msg_nm");
	var msg_nm = df.options[df.selectedIndex].text;
	
	//Massage mins combo
	var mins = document.getElementById("msg_mins");
	var msg_hrs = mins.options[mins.selectedIndex].text;
	
	
	//Appoinment hrs combo
	var ap_hrs = document.getElementById("ap_hrs");
	var ap_hrs = ap_hrs.options[ap_hrs.selectedIndex].text;
	//Appoinment mins combo
	var ap_mins = document.getElementById("ap_mins");
	var ap_mins = ap_mins.options[ap_mins.selectedIndex].text;
	
	var msg = document.getElementById('msg').value;
	
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
		$(document.getElementById("message").innerHTML=xmlhttp.responseText);

	  }
	}
	
	
	//sending all variable
	fnm= "fnm="+fnm;
	lnm = "&lnm="+lnm;
	email= "&email="+email;
	ph_cell= "&ph_cell="+ph_cell;
	ap_dt= "&ap_dt="+ap_dt;
	msg_nm= "&msg_nm="+msg_nm;
	msg_hrs= "&msg_hrs="+msg_hrs;
	ap_hrs= "&ap_hrs="+ap_hrs;
	ap_mins= "&ap_mins="+ap_mins;
	msg = "&msg="+msg;
	var combin= fnm+lnm+email+ph_cell+ap_dt+msg_nm+msg_hrs+ap_hrs+ap_mins+msg;
	
	
	
		xmlhttp.open("GET","chk_save.php?"+combin,true);
		xmlhttp.send();
	

}
else
{
	document.getElementById("message").innerHTML="You are not in New Zealand to Book online!"+tz;
		
}	
	
}
function display_status()
{
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
		document.getElementById("book_status").innerHTML=xmlhttp.responseText;

	  }
	}
	xmlhttp.open("GET","booking_status.php",true);
	xmlhttp.send();
}

