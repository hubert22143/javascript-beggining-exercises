<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Twoje BMI</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="header">
            <div class="left-section">
                <img src="wzor.png">
            </div>
            <div class="right-section">
                <h1>Oblicz swoje BMI</h1>
            </div>
        </div>
    </header>
        <div class="under-header">
            <div class="table">
                <table>
                    <thead>
                    <tr>
                        <th>Interpretacja BMI</th>
                        <th>Wartosc minimalna</th>
                        <th>Wartosc maksymalna</th>
                    </tr>
                </thead>
                <tbody>
                <?php
                $serwer = 'localhost';
                $user = 'root';
                $password = '';
                $baza = 'egzamin';

                $conn = mysqli_connect($serwer,$user,$password,$baza);
                $query = "select wart_min,wart_max,informacja from bmi";
                $querysubmission = mysqli_query($conn,$query);
                if ($querysubmission) {
                    while ($row = mysqli_fetch_row($querysubmission)) {
                        echo "<tr>";
                        echo "<td>" . $row[2] . "</td>";
                        echo "<td>" . $row[0] . "</td>";
                        echo "<td>" . $row[1] . "</td>";
                        echo "</tr>";
                    }
                }

                ?>
                </tbody>
                </table>
            </div>
        </div>
        <div class="content">
            <div class="content-left">
                <h1>Podaj wage i wzrost</h1>
                <form action="bmi.php" method="post">
                    <label for="weight">Waga<input type="number" min="1" id="weight" name="waga"></label><br>
                    <label for="height">Wzrost w cm<input type="number" id="height" min="1" name="height"></label><br>
                    <label for="submit"><button type="submit" id="submit">Oblicz i zapamietaj wynik</button></label><br>
                    <?php
                     $serwer = 'localhost';
                     $user = 'root';
                     $password = '';
                     $baza = 'egzamin';
                     $conn = mysqli_connect($serwer,$user,$password,$baza);
                     $query = "INSERT INTO bmi (wart_min,wart_max) values ('$weight','$height')";
                     $querysubmission = mysqli_query($conn,$query);
                     if (isset($_POST['waga']) && isset($_POST['height'])) {
                        $waga = $_POST['waga'];
                        $height = $_POST['height'];
                        $bmi = $waga / ($height * $height);
                        echo "Your BMI is: " . $bmi;
                    } else {

                        echo "Nie podales wagi lub wysokosci";
                    }
                    mysqli_close($conn);
    ?>
                </form>
                
            </div>>
            <div class="content-right">
                <img src="rys1.png" id="content-right-image">
            </div>
        </div>
        <footer>
            <div class="footer-text">
                <h3>Autor: 00000000000000000 <a href="#">Zobacz kwerendy</a></h3>
            </div>
        </footer>
</body>
</html>