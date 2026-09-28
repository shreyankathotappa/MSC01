<!DOCTYPE html>
<html>
<head>
    <title>problem3</title>
</head>

<body>

    <BR> Ex 2.1 Use text boxes to get a, b and n. </BR>

    a: <input type="text" id="a"><br><br>
    b: <input type="text" id="b"><br><br>
    n: <input type="text" id="n"><br><br>

    <button onclick="f()">Submit</button>

    <script>
        let f = () => {
            let a = parseInt(document.getElementById('a').value);
            let b = parseInt(document.getElementById('b').value);
            let n = parseInt(document.getElementById('n').value);

            alert("a = " + a + "\nb = " + b + "\nn = " + n);
        }
    </script>

</body>
</html>