<html>
<head>
	<title>Black Pearl Cafe</title>
	<link rel="stylesheet" type="text/css" href="./css/index.css"/>
	 <!-- jQuery -->
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
		<script type="text/javascript" src="./js/jquery.min.js"></script>
    
	
	<!-- include Cycle plugin -->
	<script type="text/javascript" src="./js/jquery.cycle.all.js"></script>
	<script type="text/javascript" src="./js/jquery.easing.1.3.js"></script>
	<link href="./css/jquery-ui.css" rel="stylesheet" type="text/css"/>
	<script type="text/javascript" src="./js/jquery-ui.min.js"></script>
	
	
	<!--include ajax files-->
	<script type="text/javascript" src="./js/displayer.js"></script>
		
<script>

 $(document).ready(function() 
  {
	
	$('.slideshow').cycle({
		fx: 'scrollUp',  // choose your transition type, ex:zoom, fade, scrollUp, shuffle, etc...
		 speedIn:  2000, timeout:   6500 //     speedOut: 1500,     easeIn:  'easeInCirc',     easeOut: 'easeOutBounce',     
		//speed: 2000, timeout: 7000
		//easing: 'easeOutBounce',     delay:  -40000 
	});
	$("#link").click(function ()
	{
		$("#left").hide("slide", {direction: "left"}, 3500);
		$("#right").hide("slide", {direction: "right"}, 3500);
		
	});
	$('.date-pick').datePicker({autoFocusNextInput: true});
  });
  
</script>

</head>
<body>

<table border=0 id="main_tb" width="70%" height="30%" cellspacing="0" cellpadding="1" align="center">
<tr>
	<td colspan=12 align="center"><img src="./image/head2.jpg" width="1100px">
	</td>
</tr>
<tr>
	<td colspan="12" cellspacing="0" cellpadding="0"><hr></td>
</tr>
<tr>
		<td align="center" style="padding: 2px;"  id="home"><a href="#" onclick="finder('home')">Home</a></td>
		<td>|</td>
		<td align="center" style="padding: 2px;" id="menu"><a href="#" >Our Menu</a></td>
		<td>|</td>
		<td align="center" style="padding: 2px;" id="pht"><a href="#" onclick="ph_gallery()">Photo Gallery</a></td>
		<td>|</td>
		<td align="center" style="padding: 2px;" id="about"><a href="#" >About Us</a></td>
		<td>|</td>
		<td align="center" style="padding: 2px;" id="contact"><a href="#" >Contact Us</a></td>
		<td>|</td>
		<td align="center" style="padding: 2px;" id="location"><a href="#" >Location</a></td>
		
</tr>
<tr>
	
	<td colspan="12"><hr></td>
</tr>
<tr>
	<td colspan="12" style=" background-image: url('./image/in_tb.jpg'); background-size: 1100px 1000px;">
	
		<table border=0 align="center" width="70%" cellspacing="5" cellpadding="5">
		<tr>
			<td colspan=2 align="center">
			
			</br>
			
			<div class="slideshow">
			
				<img src="./image/04.jpg" width="100%" height="95%" id="slide" vspace="0" border=0>
				<img src="./image/02.jpg" width="100%" height="95%" id="slide" vspace="0" border=0>
				<img src="./image/04.jpg" width="100%" height="95%" id="slide" vspace="0" border=0>
			</div>
			
			</td>
		</tr>
		</table>
		<div id="content">
		<table border=0 align="center" width="100%" cellspacing="5" cellpadding="5">	
		
		<tr>
			<td>
				
				<?php include_once("welcome.php");?>
				
			</td>
		</tr>
		</table>
		</div>
		
	</td>
</tr>

		<tr>
			<td colspan="12"><hr></td>
		</tr>
		<tr>
			<td colspan="12" align="right">Designed & Developed By:~ <a href="mailto:jimilsumra@gmail.com">jimilsumra@gmail.com</a></td>
		</tr>
		<tr>
			<td colspan="12"><hr></td>
		</tr>
</table>

<!--table border=1 height="100%" width="80%" style="background-image:url('./image/v_2.jpg'); background-repeat: no-repeat;">
<tr>
	<td>hello my name is jimil
	</td>
</tr>
</table--TRY----->
<?php
	$i = 0;
$j = blast();
	function dfjkd($skd,$kasks)
	{
		echo "lover down";
		$i = blast();
		$i = $i."nowpdf";
	}
	function blast()
	{
		$i = 1;
		return true;
	}

/*function TEST()
{
	echo "hi";
}
test();
$test=0;
$TEST=1;
echo "$test $TEST";

class foobar {
    public function executeMe(){
        function __autoload($classnm){
			echo $classnm;
            include $classnm . '.php';
        }
    }
}

$foo = new foobar();

$foo->executeMe();
some::foobar2(); //will output "hello! I'm static!"
mysome::go();//it will call mysome class static function go() and print see you


$myex = new mysome();
$myex->come();//it will call mysome class function come() and print hi i am home




$bar = new some();
$bar->foobar(); //will output "hello! I'm public!"*/
?>
</body>
</html>