<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista przyjaciol</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="header">
            <div class="header-text">
                <h2>Portal Spolecznosciowy - moje konto</h2>
            </div>
        </div>
    </header>
    <div class="content-container">
        <div class="content-selfinterest-panel">
            <div class="content-selfinterest-header">
                <h1>Moje zainteresowania</h1>
            </div>
            <ul>
                <li>muzyka</li>
                <li>film</li>
                <li>komputery</li>
            </ul>
        </div>
        <div class="content-friends-panel">
            <div class="content-friends-header">
                <h1>Moi znajomi</h1>
            </div>
            <div class="content-friends">
                <?php
                $serwer = 'localhost';
                $user = 'root';
                $password = '';
                $baza = '4ptc';
                $conn = mysqli_connect($serwer,$user,$password,$baza);
                $query = 'SELECT imie,nazwisko,opis,zdjecie,Hobby_id FROM osoby WHERE Hobby_id = 2 OR Hobby_id = 1 OR Hobby_id = 6;';
                $querysubmission = mysqli_query($conn,$query);

                if ($querysubmission) {
                    while ($row = mysqli_fetch_row($querysubmission)) {
                        echo '<div class="friend-tab">';
                        echo '<div class="friend-header">' . $row[0] . ' ' . $row[1] . '</div>';
                        echo '<div class="friend-content" id="contact">';
                        echo '<div class="friend-image"><img src="' . $row[3] . '"></div>';
                        echo '<div class="friend-info">' . $row[2] . '</div>';
                        echo '</div>';
                        echo '</div>';
                        echo '<hr>';
                    }
                }

                
                
                
                
                
                

                ?>
            </div>
        </div>

    </div>
    <footer>
        <div class="footer-container-text">
            <div class="footer-author">
                <h2>Site was made by: 0000000000000000</h2>
            </div>
            <div class="footer-contact">
                <a href="ja@portal.pl">Napisz do mnie</a>
            </div>
        </div>
    </footer>
</body>
</html>