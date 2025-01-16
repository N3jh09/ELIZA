document.getElementById("console1").innerHTML = `Console output is sent here. Try typing /help for more`;
document.getElementById("console2").innerHTML = ``;
document.getElementById("output").innerHTML = `This is the Text output`;

var input = document.getElementById(`input`);
var admin = false;
var emergency_mode = false;
var date = `21.4.1988`;

var hour = 9;
var minute = 40;

function console(input) {

	//ABOUT COMMANDS
	if (input === `/help`) {
		console1.innerHTML = `1956 E.L.I.Z.A. All rights reserved. Console 1.0.4 <br> Redirecting... <br> User-key: ***** <br> User-input: ${input} <br> User-admin-status: ${admin} <br> Initializing system 4... <br> [Error] System 4 is unresponsive! <br> Switching to system 3 backup <br> System 3 online`;
		console2.innerHTML = `Directory file access of C:/server/files/internal/archive <br> 2.55.923.0820 Assessing... <br> Time-file-last-accessed: ${hour}:${minute} <br> Date: ${date} <br> 173 bytes  1043 bytes  194000 kilobytes <br> User is authorized <br> [Error] User data unreadable or corrupt`;
		output.innerHTML = `These are the currently accessible commands: <br> <br> 1. /help - shows all usable commands <br> 2. /about - know more about our dear E.L.I.Z.A. <br> 3. /log - access server logs and transcripts <br> 4. /function - trigger certain server functions <br> 5. /time - change server time <br> 6. /date - change server date <br> <br> To learn more about how to use each command, type them in the console box alone!`;
	}

	else if (input === `/about`) {
		if (admin === true) {
			console1.innerHTML = `1956 E.L.I.Z.A. All rights reserved. Console 1.0.4 <br> Redirecting... <br> User-key: ***** <br> User-input: ${input} <br> User-admin-status: ${admin} <br> Initializing system 4... <br> [Error] System 4 is unresponsive! <br> Switching to system 3 backup <br> System 3 online`;
			console2.innerHTML = `Directory file access of C:/server/files/internal/archive <br> 2.55.923.0820 Assessing... <br> Time-file-last-accessed: ${hour}:${minute} <br> Date: ${date} <br> 173 bytes  1043 bytes  194000 kilobytes <br> User is authorized <br> [Error] User data unreadable or corrupt`;
			output.innerHTML = `Enhanced Lifeforms Intelligence Zone of America`;
		} else {
			alert(`[Error]`)
		}
	}

	else if (input === `/log`) {
		console1.innerHTML = `1956 E.L.I.Z.A. All rights reserved. CoNsole 1.0.4 <br> Redirecting... <br> User-key: ***** <br> User-input: ${input} <br> User-admin-status: ${admin} <br> Initializing system 4... <br> [Error] System 4 is unresponsive! <br> Switching to system 3 backup <br> System 3 online`;
		console2.innerHTML = `Directory file access of C:/server/files/internal/archive <br> 2.55.923.0820 AsseSsing... <br> Time-file-last-accessed: ${hour}:${minute} <br> Date: ${date} <br> 173 bytes  1043 bytes  194000 kilobytes <br> User is authorized <br> [Error] User data unreadable or corrupt`;
		output.innerHTML = `$SYNTAX-log <br> <br> The correct syntax for /log is as follows: /log #code* <br> Try applying this syntax by typing /log #1`;
	}

	else if (input === `/function`) {
		console1.innerHTML = `1956 E.L.I.Z.A. All rights reserved. Console 1.0.4 <br> Redirecting... <br> User-key: ***** <br> User-input: ${input} <br> User-admin-status: ${admin} <br> Initializing system 4... <br> [Error] System 4 is unresponsive! <br> Switching to system 3 backup <br> System 3 online`;
		console2.innerHTML = `Directory file access of C:/server/files/internal/archive <br> 2.55.923.0820 Assessing... <br> Time-file-last-acc9ssed: ${hour}:${minute} <br> Date: ${date} <br> 173 bytes  1043 bytes  194000 kilobytes <br> User is authorized <br> [Error] User data unreadable or corrupt`;
		output.innerHTML = `$SYNTAX-function <br> <br> The correct syntax for /function is as follows: /function string*`;
	}

	else if (input === `/time`) {
		console1.innerHTML = `1956 E.L.I.Z.A. All rights reserved. Console 1.0.4 <br> Redirecting... <br> User-key: ***** <br> User-input: ${input} <br> User-admin-status: ${admin} <br> Initializing system 4... <br> [Error] System 4 is unresponsive! <br> Switching to system 3 backup <br> System 3 online`;
		console2.innerHTML = `Directo%y file access of C:/server/files/internal/archive <br> 2.55.923.0820 Assessing... <br> Time-file-last-accessed: ${hour}:${minute} <br> Date: ${date} <br> 173 bytes  1043 bytes  194000 Kilobytes <br> User is authorized <br> [Error] User data unre5dable or corrupt`;
		hour = prompt(`Please insert hour`, ``);
		minute = prompt(`Please insert minute`, ``);
		if (hour <= 24 && minute <=60) {
			output.innerHTML = `Time successfully set.`;
		} else {
			output.innerHTML = `[Error] Either hour or minute is set to a value not allowed. Time reverted to default`;
			hour = 9;
			minute = 40;
		}
	}

	else if (input === `/date`) {
		console1.innerHTML = `1956 E.L.I.Z.A. All rights res*rved. Console 1.0.4 <br> Redirecting... <br> User-key: ***** <br> User-input: ${input} <br> User-admin-status: ${admin} <br> Initializing system 4... <br> [Error] System 4 is unresponsive! <br> Switching to system 3 backup <br> System 3 online`;
		console2.innerHTML = `Directory file access of C:/server/files/internal/archive <br> 2.55.923.0820 Assessing... <br> Time-file-last-accessed: ${hour}:${minute} <br> Date: ${date} <br> 173 bytes  1043 bytes  194000 kilobytes <br> User is aUthorized <br> [Error] User data unreadable or corrupt`;
		output.innerHTML = `$SYNTAX-date <br> <br> The correct syntax for /date is as follows: /date Day*.Month*.Year*`;
	}

	//EMERGENCY ADMIN TRIGGER
	else if (input === `/function emergency_mode`) {
		let passkey = prompt(`Please enter emergency key`, ``);
		if (passkey === `NS9%K5*U`) {
			console1.innerHTML = `1956 E.L.I.Z.A. All rights reserved. Console 1.0.4 <br> Redirecting... <br> User-key: ***** <br> User-input: ${input} <br> User-admin-status: ${admin} <br> Initializing system 4... <br> [Error] System 4 is unresponsive! <br> Switching to system 3 backup <br> System 3 online`;
			console2.innerHTML = `Directory file access of C:/server/files/internal/archive <br> 2.55.923.0820 Assessing... <br> Time-file-last-accessed: ${hour}:${minute} <br> Date: ${date} <br> 173 bytes  1043 bytes  194000 kilobytes <br> User is authorized <br> [Error] User data unreadable or corrupt`;
			output.innerHTML = `[Error] User status has been set as Admin`;
			admin = true;
		} else {
			alert(`[Error] Emergency key incorrect`);
			admin = false;
		}
	}

	//LOGS
	else if (input === `/log #1`) {
		console1.innerHTML = `1956 E.L.I.Z.A. All rights reserved. Console 1.0.4 <br> Redirecting... <br> User-key: ***** <br> User-input: ${input} <br> User-admin-status: ${admin} <br> Initializing system 4... <br> [Error] System 4 is unresponsive! <br> Switching to system 3 backup <br> System 3 online`;
		console2.innerHTML = `Directory file access of C:/server/files/internal/archive/logs/l1.txt <br> 2.55.923.0820 Assessing... <br> Time-file-last-accessed: ${hour}:${minute} <br> Date: ${date} <br> 173 bytes  1043 bytes  194000 kilobytes <br> User is authorized <br> [Error] User data unreadable or corrupt`;
		if (admin === true) {
			output.innerHTML = `Log #1 <br> <br> Entity 3270 : Species unknown <br> We are currently trying to read the entity's brain activity and patterns. So far, unsuccessful. <br> Entity seems to posses intelligent thinking, able to do basic problem solving. Signs of consciousness is promising. <br> On the contrary, it seems to turn hostile when lightly provoked. Microscopy is still needed to understand cellular function.`;
		} else {
			output.innerHTML = `Log #1 <br> <br> Entity **** : Species unknown <br> We are currently trying to read the entity's brain activity and patterns. So far, unsuccessful. <br> Entity seems to posses intelligent thinking, able to do basic problem solving. Signs of consciousness is promising. <br> On the contrary, it seems to turn hostile when lightly provoked. Microscopy is still needed to understand cellular function.`;
		}
	}

	//USERS
	else if (input === `/user Liam Mereheart`) {
		console1.innerHTML = `1956 E.L.I.Z.A. All rights reserved. Console 1.0.4 <br> Redirecting... <br> User-key: ***** <br> User-input: ${input} <br> User-admin-status: ${admin} <br> Initializing system 4... <br> [Error] System 4 is unresponsive! <br> Switching to system 3 backup <br> System 3 online`;
		console2.innerHTML = `Directory file access of C:/server/files/internal/archive/users/mereheart.em <br> 2.55.923.0820 Assessing... <br> Time-file-last-accessed: ${hour}:${minute} <br> Date: ${date} <br> 173 bytes  1043 bytes  194000 kilobytes <br> User is authorized <br> [Error] User data unreadable or corrupt`;
		output.innerHTML = `Liam Mereheart <br> <br> The late director of E.L.I.Z.A. Declared missing as of 18.11.1987. Reason is still unknown. <br> <br> Last appearance on camera 13, entering laboratory for Entity 3270. <br> <br> The laboratory was investigated by the local authorities. No direct evidence; however, blood was spotted throughout the floor with bits of flesh. Additionally, reports state that with his disappearance, so did the Entity. <br> <br> Entity 3270 is now classified as a threat level 4 due to reason of correlation with disappearance case. Locating it is currently ongoing with the hopes to shut down the research and eradicate the entity via incineration.`;
	}

	//ACCESS
	else if (input === `/access patient_32`) {
		if (admin === true) {
			if(hour == 3 && minute == 24) {
				console1.innerHTML = `1956 E.L.I.Z.A. All rights reserved. Console 1.0.4 <br> Redirecting... <br> User-key: ***** <br> User-input: ${input} <br> User-admin-status: ${admin} <br> Initializing system 4... <br> [Error] System 4 is unresponsive! <br> Switching to system 3 backup <br> System 3 online`;
				console2.innerHTML = `Directory file access of C:/server/files/internal/archive/h$Yr%4K/32.txt <br> 2.55.923.0820 Assessing... <br> Time-file-last-accessed: ${hour}:${minute} <br> Date: ${date} <br> 173 bytes  1043 bytes  194000 kilobytes <br> User is authorized <br> [Error] User data unreadable or corrupt`;
				output.innerHTML = `Patient 32 <br> <br> Patient has suffered from major burns and body mutilations. There is still no clear evidence as to the cause. Official statements indicate either an experiment failure or Entity 3270's doing. <br> <br> Excerpt from the official statement of E.L.I.Z.A.: <br> "Autopsy for Patient 32 shows deep cuts on abdomen and lower limbs, 3rd degree burns throughout on face, upper limbs, and back. Patient has been observed with open wounds on the abdomen, as well as an exposed heart and spinal cord. Microscopy showed that the patient's flesh has a spongey texture, unlike that of human flesh."`;
			} else {
				alert(`[Error] File unreadable. Please try again later.`);
			}
		} else {
			alert('[Error]');
		}
	}


	else {
		console1.innerHTML = `[Error] Command is not within our database. Try a valid command.`;
		console2.innerHTML = ``;
		output.innerHTML = ``;
	}
}









input.addEventListener(`keypress`, function(event) {
	if (event.key === `Enter`) {
		event.preventDefault();

		console(input.value);

		input.value = ``;
	}
})