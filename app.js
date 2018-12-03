var users=[];
var counter = 0;
var usersname=[];
var usersid=[];
 exports.insert=function (name,surname){
    var user={
        id: counter++,
        name: name,
        surname: surname
    };
    users.push(user);
    return users;
}
exports.deleteUser=function (idlocal){
    for(var i=0;i<users.length;i++){
        if(users[i].id==idlocal){
            console.log(users[i].id);
            users.splice(i,1);       
        }
    }

return users;
}
exports.searchByName=function (name){
    var j=0;
    for(var i=0;i<users.length;i++){
        if(users[i].name==name){
             usersname[j]=users[i];
             j++    
        }
    }

return usersname;
}
exports.searchById=function searchById(id){
  
    for(var i=0;i<users.length;i++){
        if(users[i].id==id){
             usersid=users[i];
             
                   
        }
    }

return usersid;
}

