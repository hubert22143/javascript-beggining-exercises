            let users = [
            {name: "Adam", surname:"Kowalski", id:1},
            {name: "Krzysiu",surname:"Konwozina", id:2},
            {name: "Pawel",surname:"Mondrzejawski",id:3 },
        ]
        let usersMapped = (arr) => { 
            let mappedUsers = arr.map(user => ({
                fullname: user.name + ' ' + user.surname,
                id:user.id,
            }));
            return mappedUsers; 
        }
        let mappedUsersArray = usersMapped(users);
        alert(mappedUsersArray[0].fullname + mappedUsersArray[0].id);