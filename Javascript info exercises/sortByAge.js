        let users = [
            {name: "Adam", surname:"Kowalski", age:25},
            {name: "Krzysiu",surname:"Konwozina", age:21},
            {name: "Pawel",surname:"Mondrzejawski",age:34 },
        ]
        let sortByAge = (arr) => {
        let sortedByAge = arr.sort((a,b) => a.age - b.age);
        return sortedByAge;
        }
        let sortedUsers = sortByAge(users);
        console.log(sortedUsers);