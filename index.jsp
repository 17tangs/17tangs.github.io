<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
		<link href="<c:url value="/resources/style.css" />" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Montserrat:200" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="<c:url value="/resources/fonts/stylesheet.css" />" />
    	<title>
    		Schedule
    	</title>
    </head>
    <body>
		<h1>${name}'s Schedule</h1>
		<div class = "schedule">
			<div class="container">
				<div class="hourDivider">
					<div class="hours">
						<div class="hour">
							<div class="hourText"></div>
 						</div>
 						<div class="hour">
							<div class="hourText">
 								8am
 							</div>
 						</div>
 						<div class="hour">
							<div class="hourText">
 								9am 
 							</div>
 						</div>
 						<div class="hour">
							<div class="hourText">
 								10am 
 							</div>
 						</div>
 						<div class="hour">
							<div class="hourText">
 								11am 
 							</div>
 						</div>
 						<div class="hour">
							<div class="hourText">
 								12am 
 							</div>
 						</div>
 						<div class="hour">
							<div class="hourText">
 								1pm 
 							</div>
 						</div>
 						<div class="hour">
							<div class="hourText">
 								2pm 
 							</div>
 						</div>
 						<div class="hour">
							<div class="hourText">
 								3pm 
 							</div>
 						</div>
 						<div class="hour">
							<div class="hourText">
 								4pm 
 							</div>
 						</div>
					</div>
				</div>
		  		<div class="day">
		  			<div class = "dayTextContainer">
		  				<div class="dayText">
		  					M
		  				</div>
		  			</div>
		  			<div class="class1"> 
		  				<div class="classText">
		  					${schedule.subjects.get(0).subjectName}
		  				</div>
		  				<div class="classHidden">
		  					Visan M. <br/>
		  					MS 5138 <br/>
		  				</div>
		  			</div>
		  			<div class="class2">
		  				<div class="classText">
		  					CS 35L
		  				</div>
		  				<div class="classHidden">
		  					Eggert, P.R. <br/>
		  					     BH 3760 <br/>
		  				</div>
		  			</div>
		  		</div>
		  		<div class="day"> 
		  			<div class = "dayTextContainer">
		  				<div class="dayText">
		  					T
		  				</div>
		  			</div>
		  			<div class="class3">
		  				<div class="classText">
		  					CS M51A
		  				</div>
		  				<div class="classHidden">
		  					Hamilton, P. <br/>
		  					Knudsen 1238 <br/>
		  				</div>
		  			</div>
		  			<div class="class4">
		  				<div class="classText">
		  					CS 180
		  				</div>
		  				<div class="classHidden">
		  					Sarrafzadeh, M. <br/>
		  					Engineering VI Mong Learning Center <br/>
		  				</div>
		  			</div>
		  			<div class="class5">
		  				<div class="classText">
		  					PHYSICS 4AL
		  				</div>
		  				<div class="classHidden">
		  					Hamilton, P. <br/>
		  					Knudsen 1238 <br/>
		  				</div>
		  			</div>
		  		</div>
				<div class="day"> 
		  			<div class = "dayTextContainer">
		  				<div class="dayText">
		  					W
		  				</div>
		  			</div> 
					<div class="class1"> 
		  				<div class="classText">
		  					Math 131AH
		  				</div>
		  				<div class="classHidden">
		  					Visan M. <br/>
		  					MS 5138 <br/>
		  				</div>
		  			</div>
		  			<div class="class2">
		  				<div class="classText">
		  					CS 35L
		  				</div>
		  				<div class="classHidden">
		  					Eggert, P.R. <br/>
		  					     BH 3760 <br/>
		  				</div>
		  			</div>
		  		</div> 	
				<div class="day"> 
		  			<div class = "dayTextContainer">
		  				<div class="dayText">
		  					R
		  				</div>
		  			</div>
					<div class="class3">
		  				<div class="classText">
		  					CS M51A
		  				</div>
		  				<div class="classHidden">
		  					Ercegovac, M.D. <br/>
		  					Bunche 2209A <br/>
		  				</div>
		  			</div>
		  			<div class="class4">
		  				<div class="classText">
		  					CS 180
		  				</div>
		  				<div class="classHidden">
		  					Sarrafzadeh, M. <br/>
		  					Engineering VI Mong Learning Center <br/>
		  				</div>
		  			</div>
				</div>
				<div class="day"> 
		  			<div class = "dayTextContainer">
		  				<div class="dayText">
		  					F
		  				</div>
		  			</div>
					<div class="class1"> 
		  				<div class="classText">
		  					Math 131AH
		  				</div>
		  				<div class="classHidden">
		  					Visan M. <br/>
		  					MS 5138 <br/>
		  				</div>
		  			</div>
				</div>
			</div>
		</div>
		<div id = "background">
		</div>
		<div class = "details">
			<div class = "c1Details", id = "c1d">
				<h1>MATH 131AH</h1>
			</div>
		</div>
		<div class = "details">	
			<div class = "c2Details", id = "c2d">
				<h1>CS 35L</h1>
			</div>
		</div>
		<div class = "details">	
			<div class = "c3Details", id = "c3d">
				<h1>CS M51A</h1>
			</div>
		</div>
		<div class = "details">	
			<div class = "c4Details", id = "c4d">
				<h1>CS 180</h1>
			</div>
		</div>
		<div class = "details">	
			<div class = "c5Details", id = "c5d">
				<h1>PHYSICS 4AL</h1>
			</div>
		</div>
		</div><script type = "text/javascript" src = "<c:url value="/resources/JQuery/scheduleScript.js"/>"></script>
		<a href="/logout">log out</a>
    </body>

</html>