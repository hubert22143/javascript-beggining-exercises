        let personData = [
            {name: "John", age: 20},
            {name: "Kamil", age: 50},
            {name: "Joanna", age: 32},
            {name: "Krzysztof", age:24},
        ]
        let getAverageAge = (arr) =>{
            ageContainer = 0;
            for(let i = 0 ; i<arr.length; i++){
                console.log(arr[i].age);
                ageContainer += arr[i].age;
            }
            return ageContainer/arr.length;
        }
        alert(getAverageAge(personData));