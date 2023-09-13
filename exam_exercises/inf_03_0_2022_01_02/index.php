<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
        <div class="header">
            <div class="logo">
                <img src="logo.png">
            </div>
            <div class="header-text">
                <h1>Prognoza dla wroclawia</h1>
            </div>
            <div class="header-right-date">
                <sup>may. 2019r</sup>
            </div>
        </div>
    <div class="main">
        <div class="table">
            <table>
                <thead>
                    <th>DATA</th>
                    <th>TEMPERATURA W NOCY</th>
                    <th>TEMPERATURA W DZIEN</th>
                    <th>OPADY [mm/h]</th>
                    <th>CISNIENIE [hPa]</th>
                </thead>
                <?php
        $serwer = 'localhost';
        $user = 'root';
        $password = '';
        $baza = 'prognoza2';
        $conn = mysqli_connect($serwer,$user,$password,$baza);
        $query  = "SELECT * from pogoda where miasta_id=1 ORDER BY data_prognozy ASC";
        
        $result = $conn->query($query);

        if($result){
            while($row = mysqli_fetch_row($result)){
                echo "<tr>";
                echo "<td>" . $row[2] . "</td>";
                echo "<td>" . $row[3] . "</td>";
                echo "<td>" . $row[4] . "</td>";
                echo "<td>" . $row[5] . "</td>";
                echo "<td>" . $row[6] . "</td>";
                echo "</tr>";
            }
        } else {
            echo "." . $conn->error;
        }
        mysqli_close($conn);
        ?>
            </table>
        </div>
    </div>
    <div class="bottom">
        <div class="left">
            <img src="obraz.jpg">
        </div>
        <div class="right">
            <a href="#">Pobierz Kwerendy</a>
        </div>
    </div>
    <footer>
        <div class="footer-text">
            Author: 0000000000000000000000
        </div>
    </footer>
</body>
</html>