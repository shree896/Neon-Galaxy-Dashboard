// ⏳ Update Time
function updateTime() {
    const timeElement = document.getElementById("time");
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime(); // Call once to avoid delay

// 🌤 Fetch Weather Data
async function getWeather() {
    const apiKey = "YOUR_API_KEY"; // Get a free API key from openweathermap.org
    const city = "New York";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("weather").textContent = `${data.weather[0].description}, ${data.main.temp}°C`;
    } catch (error) {
        document.getElementById("weather").textContent = "Failed to load weather";
    }
}
getWeather();

// ✨ Toggle Background Colors
let colors = ["#090979", "#ff0080", "#00ffea", "#1d2671"];
let index = 0;

function toggleBackground() {
    index = (index + 1) % colors.length;
    document.body.style.background = `linear-gradient(45deg, ${colors[index]}, #00d4ff)`;
}

// ⭐️ Generate Random Stars
function createStars() {
    const starsContainer = document.createElement("div");
    starsContainer.classList.add("stars");
    document.body.appendChild(starsContainer);

    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.top = Math.random() * 100 + "vh";
        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = Math.random() * 2 + 2 + "s"; // Random twinkle speed
        starsContainer.appendChild(star);
    }
}

createStars();
