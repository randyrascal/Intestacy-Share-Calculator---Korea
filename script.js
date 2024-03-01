/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    padding: 20px;
    background-color: #f4f4f4;
}

header {
    background: #005a87;
    color: #ffffff;
    padding: 20px;
    text-align: center;
}

header h1 {
    margin: 0;
    font-size: 24px;
}

main {
    padding: 20px;
}

.introduction p {
    margin-bottom: 20px;
}

.calculator {
    background: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.question {
    margin-bottom: 20px;
}

.question label {
    display: block;
    margin-bottom: 5px;
}

.question select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

.calculation-result button {
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    background: #007bff;
    color: #ffffff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
}

.calculation-result button:hover {
    background: #0056b3;
}

footer {
    text-align: center;
    padding: 20px;
    background: #333;
    color: #ffffff;
    margin-top: 20px;
}

#result {
    margin-top: 20px;
}
