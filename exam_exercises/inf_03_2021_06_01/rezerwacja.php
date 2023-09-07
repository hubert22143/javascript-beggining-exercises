<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rezerwacja</title>
</head>
<body>
    <?php
    $serwer = 'localhost';
    $user = 'root';
    $password = '';
    $baza = 'baza';
    $conn = mysqli_connect($serwer,$user,$password,$baza);

    $nr_stolika = "null";
    $data_rez = $_REQUEST['data'];
    $liczba_osob = $_REQUEST['clientnumbers'];
    $telefon = $_REQUEST['phonenumber'];
    
    $query = "INSERT INTO rezerwacje (nr_stolika, data_rez, liczba_osob, telefon) VALUES ('$nr_stolika', '$data_rez', '$liczba_osob', '$telefon')";

    $querysubmission = mysqli_query($conn,$query);

    if($querysubmission){
        echo("Dodano rezerwację do bazy");
    }else{
        echo"some error happened, try again later";
    }
    mysqli_close($conn);
    ?>
</body>
</html>