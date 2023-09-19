<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="banner">
        <div class="left">
            <h1>Internetowy sklep z eko-warzywami</h1>
        </div>
        <div class="right">
            <ol>
                <li>warzywa</li>
                <li>owoce</li>
                <li><a href="https://terapiasokami.pl/" target="_blank">soki</a></li>
            </ol>
        </div>
    </div>
    <div class="main">
    <?php
    $serwer = 'localhost';
    $user = 'root';
    $password = '';
    $baza = 'baaza2';
    $conn = mysqli_connect($serwer,$user,$password,$baza);
    $query = ('select nazwa,ilosc,opis,cena,zdjecie from produkty where Rodzaje_id = 1 OR Rodzaje_id=2;');
    $querysubmission = mysqli_query($conn,$query);

    if($querysubmission){
        while($row = mysqli_fetch_row($querysubmission)){
            $image = $row[4];
            echo '<div class="createdDiv">';
            echo '<div class="image-holder">';
            echo '<img src="' . $image . '" alt="Image Description">';
            echo '</div>';
            echo '<div class="food-header">';
            echo '<h5>' . $row[0] . '</h5>';
            echo '</div>';
            echo '<div class="food-info">';
            echo '<p>' . 'opis:' . $row[2] . '</p>';
            echo '<p>' . 'na stanie:' . $row[3] . '</p>';
            echo '</div>';
            echo '<div class="price">' . $row[3] . '</div>';
            echo '</div>';


        }
    }


    ?>
    </div>
    <footer>
        <form method="post">
            <label for="nazwa">Nazwa:</label>
            <input type="text" id="nazwa">
            <label for="cena">Cena:</label>
            <input type="text" id="cena">
            <button type="submit">Dodaj Produkt</button>
        </form>
        <p>Strone wykonal: 0000000000000</p>
    </footer>
</body>
</html>