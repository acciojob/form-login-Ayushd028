function getFormvalue() {
	let fname = document.querySelector("[name='fname']").value.trim();
	let lname = document.querySelector("[name='lname']").value.trim();
	let fullName = fname + " "+lname;

	if(!fname || !lname){
		alert("Please fill all the details")
		return;
	}

	alert(fullName)
}
