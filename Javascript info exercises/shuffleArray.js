        let numbers = [3,2,6,1,9,44,1,31];

        let shuffle = (arr) => {
            for(let i = arr.length - 1; i>0 ; i--){
                let j = Math.floor(Math.random() * (i + 1));
                [arr[i] , arr[j] ] = [arr[j] , arr[i] ];
            }
        }
        shuffle(numbers);
        alert(numbers);