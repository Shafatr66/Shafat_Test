<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple JS Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h1>Welcome to the JavaScript Demo</h1>
    <p id="text">Click the button to change this text!</p>
    <button onclick="changeText()">Click Me!</button>

    <script>
        function changeText() {
            document.getElementById("text").innerHTML = "You clicked the button!";
        }
    </script>
</body>
</html>
