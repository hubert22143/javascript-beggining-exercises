        let users = [
            {name: "Adam", age:15},
            {name: "Krzysiu", age:13},
            {name: "Pawel", age:18 },
        ]
        const userReturn = (obj) => {
            let objects = obj.map(user => user.name);
            return objects;
        }
        let userCallback = userReturn(users);
        alert(userCallback);