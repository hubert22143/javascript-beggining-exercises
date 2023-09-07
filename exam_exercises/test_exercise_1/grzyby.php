<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grzybobranie</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
    <div class="header">
        <div class="headertext">
            <h1>Czas na Grzyby!</h1>
            </div>
        <div class="headerimage">
            <img src="scaled.mushroom.jpg.xcf"></img>
            </div>
    </div>
    <div class="main">
        <div class="left">
            <h1>Grzyby Jadalne</h1>
            <?php
            $username = "root";
            $password = "";
            $server = "localhost";
            $dbname = "grzybobranie";

            $conn = mysqli_connect($server,$username,$password,$dbname);
            $query = "SELECT id,nazwa,potoczna from grzyby WHERE jadalnosc=1";
            $myquery = mysqli_query($conn,$query);
            if(mysqli_num_rows($myquery)>0){
                echo "<ol>";
                while($row = mysqli_fetch_assoc($myquery)){
                    echo "<li>" . $row['id'] . " " . $row['nazwa'] . " " . $row['potoczna'] . " " . "</li>"; 
                }
                echo "</ol>";
            }else{
                echo "Something went wrong";
            }
            mysqli_close($conn);
            ?>
            <h1>Polecamy do zup</h1>
            <?php
            $username = "root";
            $password = "";
            $server = "localhost";
            $dbname = "grzybobranie";

            $conn = mysqli_connect($server,$username,$password,$dbname);
            $query = "SELECT grzyby.potoczna, rodzina.nazwa AS rodzina_nazwa
          FROM grzyby
          JOIN potrawy ON grzyby.id = potrawy.rodzina_id
          JOIN rodzina ON potrawy.rodzina_id = rodzina.id
          WHERE potrawy.nazwa = 'zupa'";

            $myquery = mysqli_query($conn,$query);
            if(mysqli_num_rows($myquery)>0){
                echo "<ul>";
                while($row = mysqli_fetch_assoc($myquery)){
                    echo "Do tych zup polecamy!" . $row['zupa'] . "Smacznego!";
                }
                echo "</ul";
            }else{
                echo "Niestety, dla wybranych zup nie posiadamy zadnych polecen.";
            }
            ?>
            
        
            </div>
        <div class="right">
            </div>
    </div>
        <div class="footer">
            <h1>The site was made by Hubert</h1>
            </div>

</body>
</html>