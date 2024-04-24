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

