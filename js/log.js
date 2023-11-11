

// var details = [
//   {
//     email: "2023course@gmail.com",
//     password: "password"
//   },
//   {
//     email: "tabzee001@gmail.com",
//     password: "password"
//   }
// ]



// function getInfo(){
//   var email = document.getElementById("email").value
//   var password = document.getElementById("password").value

//     if(email == "2023course@gmail.com" && password == "1234"){
//       window.location.href="test.html";
//     }
//     else{
//       alert("Invalid email and password")
//     }

// }



// var objPeople = [
// 	{ // Object @ 0 index
// 		email: "2023course@gmail.com",
//     password: "password"
// 	},
// 	{ // Object @ 1 index
// 		email: "tabzee001@gmail.com",
//     password: "password"
// 	},
// 	{ // Object @ 2 index
// 		email: "engr.idowutaiwo@gmail.com",
//     password: "password"
// 	}

// ]

function getInfo() {
	var email = document.getElementById('email').value
	var password = document.getElementById('password').value

		// check is user input matches username and password of a current index of the objPeople array
		if(email == "2023course@gmail.com" && password == "password") {
			// console.log(email + " is logged in!!!")
      window.location.href="test.html";
			// stop the function if this is found to be true
			return
		}

    else if(email == "tabzee001@gmail.com" && password == "password") {
			// console.log(email + " is logged in!!!")
      window.location.href="first_timer.html";
			// stop the function if this is found to be true
			return
		}
	alert("incorrect email or password")
}