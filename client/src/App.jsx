import { useState } from "react";
import "./App.css";

const facilities = [
{ name: "Platform 1", icon: "🚆", x: 18, y: 82 },
{ name: "Platform 2", icon: "🚆", x: 82, y: 82 },
{ name: "Ticket Counter", icon: "🎫", x: 18, y: 18 },
{ name: "Restroom", icon: "🚻", x: 78, y: 48 },
{ name: "Food Court", icon: "🍴", x: 22, y: 48 },
{ name: "Waiting Hall", icon: "🪑", x: 82, y: 18 },
{ name: "ATM", icon: "🏧", x: 65, y: 30 },
{ name: "Lift", icon: "♿", x: 50, y: 65 },
{ name: "Escalator", icon: "↗️", x: 35, y: 65 },
];

const currentLocation = {
x: 50,
y: 88,
};

function App() {
const [destination, setDestination] = useState("");
const [accessible, setAccessible] = useState(false);
const [route, setRoute] = useState([]);

const selectedFacility = facilities.find(
(facility) => facility.name === destination
);

function findRoute() {
if (!selectedFacility) {
alert("Please select a destination.");
return;
}

```
const middlePoint = accessible
  ? { x: 50, y: 65 }
  : { x: 50, y: 58 };

setRoute([
  currentLocation,
  middlePoint,
  {
    x: selectedFacility.x,
    y: selectedFacility.y,
  },
]);

document
  .getElementById("navigation")
  ?.scrollIntoView({ behavior: "smooth" });
```

}

function navigateToFacility(facility) {
setDestination(facility.name);

```
const middlePoint = accessible
  ? { x: 50, y: 65 }
  : { x: 50, y: 58 };

setRoute([
  currentLocation,
  middlePoint,
  {
    x: facility.x,
    y: facility.y,
  },
]);

document
  .getElementById("navigation")
  ?.scrollIntoView({ behavior: "smooth" });
```

}

const routePoints = route
.map((point) => `${point.x},${point.y}`)
.join(" ");

return ( <div className="app">

```
  <nav className="navbar">
    <div className="logo">🚆 RailNav</div>

    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#navigation">Navigation</a>
      <a href="#facilities">Facilities</a>
      <a href="#features">Features</a>
    </div>
  </nav>

  <section className="hero" id="home">
    <div className="hero-content">
      <div className="tag">
        SMART RAILWAY STATION NAVIGATION
      </div>

      <h1>
        Find Your Way
        <br />
        <span>Inside the Station</span>
      </h1>

      <p>
        Navigate railway station facilities quickly and easily
        with smart indoor navigation.
      </p>

      <a className="hero-button" href="#navigation">
        Start Navigation →
      </a>
    </div>
  </section>

  <section className="navigation-section" id="navigation">
    <div className="section-heading">
      <div className="heading-icon">🧭</div>

      <div>
        <h2>Smart Navigation</h2>
        <p>
          Select your destination and find the best route.
        </p>
      </div>
    </div>

    <div className="navigation-box">

      <div className="input-group">
        <label htmlFor="destination">
          Where do you want to go?
        </label>

        <select
          id="destination"
          value={destination}
          onChange={(event) =>
            setDestination(event.target.value)
          }
        >
          <option value="">
            Select a facility
          </option>

          {facilities.map((facility) => (
            <option
              key={facility.name}
              value={facility.name}
            >
              {facility.icon} {facility.name}
            </option>
          ))}
        </select>
      </div>

      <label className="accessible-option">
        <input
          type="checkbox"
          checked={accessible}
          onChange={(event) =>
            setAccessible(event.target.checked)
          }
        />

        <span>
          ♿ Prefer accessible route
          <small>
            Use lifts and accessible paths
          </small>
        </span>
      </label>

      <button
        className="find-button"
        onClick={findRoute}
      >
        Find Route
      </button>
    </div>
  </section>

  <section className="map-section">
    <div className="section-heading">
      <div className="heading-icon">🗺️</div>

      <div>
        <h2>Interactive Station Map</h2>
        <p>
          View your location and navigation route.
        </p>
      </div>
    </div>

    <div className="map-container">

      <div className="station-map">

        <div className="horizontal-path"></div>
        <div className="vertical-path"></div>

        {route.length > 0 && (
          <svg
            className="route-svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polyline
              points={routePoints}
              fill="none"
              stroke="#2563eb"
              strokeWidth="1.8"
              strokeDasharray="4 2"
              strokeLinecap="round"
            />
          </svg>
        )}

        <div className="map-label entrance">
          🚪 Main Entrance
        </div>

        <div className="map-label ticket">
          🎫 Ticket Counter
        </div>

        <div className="map-label waiting">
          🪑 Waiting Hall
        </div>

        <div className="map-label food">
          🍴 Food Court
        </div>

        <div className="map-label restroom">
          🚻 Restroom
        </div>

        <div className="map-label lift">
          ♿ Lift
        </div>

        <div className="map-label atm">
          🏧 ATM
        </div>

        <div className="map-label escalator">
          ↗️ Escalator
        </div>

        <div className="platform platform-one">
          Platform 1
        </div>

        <div className="platform platform-two">
          Platform 2
        </div>

        <div className="you-are-here">
          <div className="you-dot"></div>
          <span>YOU ARE HERE</span>
        </div>

        {selectedFacility && (
          <div
            className="destination-marker"
            style={{
              left: `${selectedFacility.x}%`,
              top: `${selectedFacility.y}%`,
            }}
          >
            📍
          </div>
        )}
      </div>

      {selectedFacility && (
        <div className="route-info">

          <div>
            <h3>
              📍 Route to {selectedFacility.name}
            </h3>

            <p>
              Main Entrance
              {" → "}
              {accessible ? "Lift" : "Central Path"}
              {" → "}
              {selectedFacility.name}
            </p>

            <span>
              {accessible
                ? "♿ Accessible route using Lift"
                : "🚶 Standard navigation route"}
            </span>
          </div>

          <div className="route-time">
            <strong>3–5 min</strong>
            <small>Estimated time</small>
          </div>

        </div>
      )}
    </div>
  </section>

  <section
    className="facilities-section"
    id="facilities"
  >
    <div className="section-heading center-heading">
      <div className="heading-icon">🏢</div>

      <div>
        <h2>Station Facilities</h2>
        <p>
          Quickly find important facilities inside the station.
        </p>
      </div>
    </div>

    <div className="facility-grid">
      {facilities.map((facility) => (
        <div
          className="facility-card"
          key={facility.name}
        >
          <div className="facility-icon">
            {facility.icon}
          </div>

          <h3>{facility.name}</h3>

          <p>
            Locate {facility.name.toLowerCase()} easily.
          </p>

          <button
            onClick={() =>
              navigateToFacility(facility)
            }
          >
            Navigate →
          </button>
        </div>
      ))}
    </div>
  </section>

  <section
    className="features-section"
    id="features"
  >
    <div className="section-heading center-heading">
      <div className="heading-icon">✨</div>

      <div>
        <h2>Smart Features</h2>
        <p>
          Designed to make railway station navigation easier.
        </p>
      </div>
    </div>

    <div className="feature-grid">

      <div className="feature-card">
        <div className="feature-icon">🧭</div>
        <h3>Smart Navigation</h3>
        <p>
          Find routes between railway station facilities.
        </p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">♿</div>
        <h3>Accessibility</h3>
        <p>
          Choose routes using lifts and accessible paths.
        </p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">🔎</div>
        <h3>Facility Search</h3>
        <p>
          Quickly locate important station facilities.
        </p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">📱</div>
        <h3>Mobile Friendly</h3>
        <p>
          Designed for desktop, tablet and mobile screens.
        </p>
      </div>

    </div>
        </section>

      <footer>
        <div className="footer-logo">🚆 RailNav</div>

        <p>
          Smart Indoor Navigation for Railway Stations
        </p>

        <span>
          SIH 1710 • Ministry of Railways
        </span>
      </footer>

    </div>
  );
}

export default App;