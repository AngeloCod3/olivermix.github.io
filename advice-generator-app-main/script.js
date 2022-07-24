

try {
    const data = fetch('https://api.adviceslip.com/advice')
.then(response => response.json())
.then(data => {
    const number = document.getElementById('number-advice');
    number.innerText = "Advice #" + data.slip.id;

    const p = document.getElementById('main-advice');
    p.innerText =  data.slip.advice;
});
} catch {
    const p = document.getElementById('main-advice');
    p.innerText =  "An Error has happends try again to get your advice";
}