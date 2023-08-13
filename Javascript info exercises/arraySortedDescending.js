
   let arrNumbers = [16, 25, 30, 45, 60, 95, 1, 3, 4, 25, 6, 23, -2 , -4 , -6];

    const sortedNumbers = (arr) =>{
      let sorted = arr.sort((a,b) => b-a);
      return sorted;
    }
    alert(sortedNumbers(arrNumbers));
  </script>
