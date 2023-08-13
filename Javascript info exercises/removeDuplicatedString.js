        let strings = ["Jajo", "Jajo", "Mleko", "Mleko", "Mleko", "Cukier", "Cukier", "Pszenica", "Pszenica", ":D"];

        let removeRepeated = (string) => {
            let someStrings = string.filter((item,index) => {
                return string.indexOf(item) === index;
            });
            return someStrings;
        }
        console.log(removeRepeated(strings));