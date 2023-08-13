        let users = [ 
        {id:"John",name:"John Smith",age:15},
        {id:"Maria",name:"Maria Squadovska",age:17},
        {id:"Marek",name:"Marek Squinty", age:23},
        ];
        let uniqueId = (arr) => {
            return arr.reduce((obj,value) =>{
                obj[value.id] = value;
                return obj;
            }, {})
        }
        console.log(uniqueId(users));