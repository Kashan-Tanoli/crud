
// 0
// 1
// 2
// 3
// length=4
	
	function userdata()
	{
	
	var users = [
		document.getElementById('fname').value,
		document.getElementById('lname').value,
		document.getElementById('email').value,
		document.getElementById('pass').value
	];
	
	// Tbody id=data
	
document.getElementById('data').innerHTML += "<tr>" + 
	"<td id='first'>" + users[0] + "</td>" + 
	"<td id='last'>" + users[1] + "</td>" +
	"<td id='semail'>" + users[2] + "</td>" +
	"<td id='spass'>" + users[3] + "</td>" +
	"<td><button class='btn btn-warning' onclick='editdata(this)'>Edit</button></td>" +
	
	"<td><button class='btn btn-danger' onclick='deletedata(this)'>Delete</button></td>" + 
	"</tr>";
		
	document.getElementById('fname').value = "";
	document.getElementById('lname').value = "";
	document.getElementById('email').value = "";
	document.getElementById('pass').value = "";
		
		
	}
	
	
	
	function editdata(row)
	{
		document.getElementById('save').style.display = 'none';
		document.getElementById('update').style.display = 'block';
		
		
		var rowIndex = row.parentNode.parentNode.rowIndex;
		
document.getElementById('fname').value = document.getElementById('data').childNodes[rowIndex].childNodes[0].innerHTML;
		
document.getElementById('lname').value = document.getElementById('data').childNodes[rowIndex].childNodes[1].innerHTML;
		
document.getElementById('email').value = document.getElementById('data').childNodes[rowIndex].childNodes[2].innerHTML;
		
document.getElementById('pass').value = document.getElementById('data').childNodes[rowIndex].childNodes[3].innerHTML;
		
		
		document.getElementById('hidden').innerHTML = 
			"<input type='number' id='index' value='" + rowIndex + "' style='display:none;'>";
		
		
	}
	
	
	function updatedata()
	{
		
		
		
		var rowIndex = document.getElementById('index').value;
		
document.getElementById('data').childNodes[rowIndex].childNodes[0].innerHTML = document.getElementById('fname').value;
		
document.getElementById('data').childNodes[rowIndex].childNodes[1].innerHTML = document.getElementById('lname').value;
		
document.getElementById('data').childNodes[rowIndex].childNodes[2].innerHTML = document.getElementById('email').value;
		
document.getElementById('data').childNodes[rowIndex].childNodes[3].innerHTML = document.getElementById('pass').value;
		
		document.getElementById('save').style.display = 'block';
		document.getElementById('update').style.display = 'none';
		
		document.getElementById('fname').value = "";
	document.getElementById('lname').value = "";
	document.getElementById('email').value = "";
	document.getElementById('pass').value = "";
		
	}
	
	
	function deletedata(row)
	{
		
		
		var rowindex = row.parentNode.parentNode.rowIndex;
		
		document.getElementById('data').deleteRow(rowindex-1);
		
	}
	
