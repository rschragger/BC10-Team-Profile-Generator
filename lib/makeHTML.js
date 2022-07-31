//This part will take in an array with "Employee" HTML from below and make the full page
function makeHtmlPage(employeeList) {
    let cardsHTML = '';
    for (let i = 0; i < employeeList.length; i++) {
        let thisEmployee = employeeList[i];
        cardsHTML += makeEmployeeCard(thisEmployee);
        // console.log(cardsHTML)
    }
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./reset.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body>
    <header class="header">
<h1>Team Profile</h1>
    </header>
    <section class="main">
    ` + cardsHTML +
        `
        </section>
    <footer>
        &copy; 2022 Reeve Schragger
    </footer>
</body>
</html>`
};


//This part will take in an "Employee" class (and the extensions) and make HTML

function makeEmployeeCard(employee) {
    /* example 
    var employee = {
        name: 'name',
        id: 'id',
        email: 'email@email.com',
        role: 'role',
        officeNumber: 'officeNo'
    }
    /**/

    var roleIcon = ''
    switch (employee.role.toLowerCase()) {
        case 'manager':
            roleIcon = '☕️'
            break;
        case 'engineer':
            roleIcon = '🛠'
            break;
        case 'intern':
            roleIcon = '👩‍🎓'
            break;
        default: roleIcon = null
            break;
    }

    return `<div class="card ${employee.role.toLowerCase()}" id="card${employee.id}">
<div class="card-head">
    <h3 class="employeeName">${employee.name}</h3>
    <h4 class="role"><span class="roleIcon">${roleIcon}</span> ${employee.role}</h4>
</div>
<div class="cardBody">
    <ul class="detailList">
        <li class="detail id">ID: ${employee.id}</li>
        <li class="detail email">Email: <a class="emailLink" href="mailto: ${employee.email}">${employee.email}</a>
           </li>
        ${finalItem(employee)}  
    </ul>
</div>
</div>`;

};

// this function provides the final list item which is different for each

function finalItem(employee) {
    let finItem
    switch (employee.role.toLowerCase()) {
        case 'manager':
            finItem = `<li class="detail officeNumber">Office Number: ${employee.officeNumber}</li >`
            break;
        case 'engineer':
            finItem = `<li class="detail gitHub">GitHub: <a href="https://github.com/${employee.github}" target="_blank">github.com/${employee.github}</a></li>`
            break;
        case 'intern':
            finItem = `<li class="detail school">School: ${employee.school}</li>`
            break;

        default:
            break;
    }
    return finItem
};

module.exports = makeHtmlPage