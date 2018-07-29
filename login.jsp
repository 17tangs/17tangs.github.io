<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<title></title>
	<link href="<c:url value="/resources/styleForm.css" />" rel="stylesheet">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet'>
	<script>
	function activateUserLine(){
		document.getElementById('bord1').style.cssText = 'border-top:1px solid white; width:100%; height:5px; transform: scaleX(1); transform-origin:7% 50%;  transition: transform 500ms ease-in-out;'
	}
	function deactivateUserLine(){
		document.getElementById('bord1').style.cssText = 'border-top:1px solid white; width:100%; height:5px; transform: scaleX(0); transform-origin:7% 100%; transition: transform 250ms ease-in-out;'
	}
	function activatePassLine(){
		document.getElementById('bord2').style.cssText = 'border-top:1px solid white; width:100%; height:5px; transform: scaleX(1); transform-origin:7% 50%; transition: transform 500ms ease-in-out;'
	}
	function deactivatePassLine(){
		document.getElementById('bord2').style.cssText = 'border-top:1px solid white; width:100%; height:5px; transform: scaleX(0);  transform-origin:7% 100%; transition: transform 250ms ease-in-out;'
	}
	</script>
</head>
<body class = "background">
	<div>
		<h2>Welcome to Schedule</h2>
		<form class="form-style-8" action = "/login" method = "POST">
			<input type="text" name="username" id = "username" placeholder="Username" onfocus="activateUserLine();" onblur="deactivateUserLine();" /> 
			<div id = "bord1"></div>			
			<input type="password" name="password" id = "password" placeholder="Password" onfocus="activatePassLine();" onblur="deactivatePassLine();" /> 
			<div id = "bord2"></div>
			<input type="submit" value="Login" />
		<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
		</form>
	</div>
</body>
</html>
