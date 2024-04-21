const tableBody = document.getElementById('user-table');

async function getUserData() {
  const response = await fetch('/users'); // Assuming your server endpoint is '/api/get-info'
  const data = await response.json();
  
  for (const user of data) {
    const tableRow = document.createElement('tr');
    
    // Assuming your data has columns like 'name', 'email' etc. 
    for (const key in user) {
      const tableCell = document.createElement('td');
      tableCell.innerText = user[key];
      tableRow.appendChild(tableCell);
    }
    
    tableBody.appendChild(tableRow);
  }
}

getUserData();

var theme = document.getElementById("darkmode-toggle");
var dark = true
theme.onclick = function(){
   
    if(dark){
    document.body.style.background="linear-gradient(180deg,rgba(137, 47, 255, 0.42) 31.77%,#6392de 100%)";
    }
    else{
        document.body.style.background="radial-gradient(circle, rgba(8,8,32,1) 7%, rgba(27,27,121,1) 98%)";
    }
    dark = !dark
}