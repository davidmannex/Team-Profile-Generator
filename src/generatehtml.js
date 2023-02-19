function generateEmployeeCard(name,role,id,email,rolespecific){
    formattedEmail='<a href="mailto:'+email+'">'+email+'</a>';
    var rolespecificFormatted='<ul>';
    switch(role){
        case "Manager":{
            rolespecificFormatted=rolespecificFormatted+'Office Number:'+rolespecific+'</ul>';
            break;
        }
        case "Engineer":{
            rolespecificFormatted=rolespecificFormatted+'Github:<a href="https://github.com/'+rolespecific+'" target="_blank">'+rolespecific+'</a></ul>';
            break;
        }
        case "Intern":{
            rolespecificFormatted=rolespecificFormatted+'School: '+rolespecific+'</ul>'
            break;}
        }
    var output='<div class="card"><div class="top"><h1>'+name+'</h1><h2>'+role+'</h2></div><div class="bottom"><ul>ID:'+id+'</ul><ul>Email:'+formattedEmail+'</ul>'+rolespecificFormatted+'</div></div>';
    return output;
}

function generateTeamCards(teamMembers){
    teamCards='';
    for(var x=0;x<teamMembers.length;x++){
        var person=teamMembers[x];
        var rolespecific='';
        switch(person.getRole()){
            case "Manager":{
                rolespecific=person.getOfficeNumber();
                break;
            }
            case "Engineer":{
                rolespecific=person.getGithub();
                break;
            }
            case "Intern":{
                rolespecific=person.getSchool();
                break;}
            }
        teamCards=teamCards+generateEmployeeCard(person.getName(),person.getRole(),person.getId(),person.getEmail(),rolespecific);
    }
    return teamCards
}

function generateHTML(teamMembers){
    var teamcards=generateTeamCards(teamMembers);
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    <body>
        <div class="row">
            <div class="col-12 bg-danger">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">`+
             teamcards+`
                
            </div>
        </div>
    </div>
    </body>
    </html>
    `;
    }
module.exports = generateHTML;