const url = 'https://www.jma.go.jp/bosai/forecast/data/forecast/120000.json';
const button = document.getElementById('weather-btn');

button.addEventListener('click', () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = data[0].timeSeries[0].areas[0].weathers[1];
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '明日の天気は：' + weather;
    })
    .catch((error) => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '天気予報の取得に失敗しました。';
        console.error('Error fetching weather data:', error);
    });
});