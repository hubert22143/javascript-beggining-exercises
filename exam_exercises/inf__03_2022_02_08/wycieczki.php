<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wycieczki i urlopy</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="wrapper">
    <div class="header">
        <h2>Biuro Podrozy</h2>
    </div>
    <div class="content">
        <div class="content-left">
            <div class="content-left-header">
                <h2>Kontakt</h2>
            </div>
            <a href="biuro@wycieczki.pl">Napisz do nas</a> <br>
            Telefon: 555666777
        </div>
        <div class="content-center">
            <div class="content-center-header">
                <h2>Galeria</h2>
            </div>
            <div class="content-center-images">
            <?php
            $serwer = 'localhost';
            $user = 'root';
            $password = '';
            $baza = 'egzamin3';
            $query = 'select nazwaPliku,podpis from zdjecia order BY podpis ASC;';
            $conn = mysqli_connect($serwer,$user,$password,$baza);
            $querysubmission = mysqli_query($conn,$query);

            if($querysubmission){
                while($row = mysqli_fetch_row($querysubmission)){
                $imagePath = $row['0'];
                $caption = $row['1'];
                echo '<img src="' . $imagePath . '" alt = "' . $caption . '">';

                }
            }
            mysqli_close($conn);
            ?>
            </div>
        </div>
        <div class="content-right">
            <div class="content-right-header">
                <h2>Promocje</h2>
            </div>
            <table>
                <tr>
                    <th>Jesien</th>
                    <th>Grupa 4+</th>
                    <th>Grupa 10+</th>
                </tr>
                <tr>
                    <td>5%</td>
                    <td>10%</td>
                    <td>15%</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="content-down">
        <div class="content-down-header">
            <h2>Lista Wycieczek</h2>
        </div>
        <div class="content-down-list">
            <?php
            $serwer = 'localhost';
            $user = 'root';
            $password = '';
            $baza = 'egzamin3';
            $conn = mysqli_connect($serwer,$user,$password,$baza);
            $query = 'SELECT id,dataWyjazdu,cel,cena,dostepna FROM wycieczki WHERE dostepna=1;';
            $querysubmission = mysqli_query($conn,$query);

            if($querysubmission){
                while($row=mysqli_fetch_row($querysubmission)){
                    echo "<p>" . "$row[0]". " " . "$row[1]" . "," ."$row[2]  ". " " . "cena:". "$row[3]";
                }
            }
            mysqli_close($conn);
            ?>
        </div>
    </div>
    <footer>
        <div class="footer-author">
            <h2>Strone wykonal: 000000000000</h2>
        </div>
    </footer>
</div>
</body>
</html>