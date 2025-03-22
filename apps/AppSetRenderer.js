// JSON data representing your apps
const appsData = [
  {
    "category": "Web Apps",
    "apps": [
      {
        "name": "tewFA",
        "description": "A simple and modern 2FA app.",
        "image": "https://tewfa.pages.dev/assets/icon-1024.png",
        "link": "https://tewfa.pages.dev/",
        "github": "https://github.com/tewFA/tewFA"
      },
      {
        "name": "Clocs",
        "description": "Keep track of everyone's time.",
        "image": "https://clocs.pages.dev/Icons/Icon.png",
        "link": "https://clocs.pages.dev/",
        "github": "https://github.com/asboy2035/Clocs/"
      },
      {
        "name": "Astronomer",
        "description": "An app with all the planets :)",
        "image": "https://ashtronomy.pages.dev/Images/Astronomy-Icon.png",
        "link": "https://ashtronomy.pages.dev/",
        "github": "https://github.com/asboy2035/Astronomy/"
      },
      {
        "name": "Vault",
        "description": "A private space for your ideas.",
        "image": "https://byteforge-site-3-3.byteforge.pages.dev/Images/Vault-Icon.jpeg",
        "link": "/vault/",
        "github": "https://github.com/ByteForgeProd/ByteSite/tree/byteforge-site-3.3/vault/"
      }
    ]
  },
  {
    "category": "Mac Apps",
    "apps": [
      {
        "name": "Stand",
        "description": "A Mac app for standing desks.",
        "image": "./icons/Stand-Icon.png",
        "link": "./stand.html"
      },
      {
        "name": "BigTime",
        "description": "A minimal macOS time tracker.",
        "image": "./icons/BigTime-Icon.png",
        "link": "#",
        "disabled": true
      }
    ]
  }
];

// Function to generate the HTML dynamically
function generateAppCards(appData) {
  return appData.apps.map(app => {
    return `
  <div class="app-card-v2">
    <img src="${app.image}" alt="${app.name} Logo">
    <div class="app-details">
      <h3>${app.name}</h3>
      <p class="light">${app.description}</p>
    </div>
    <div class="app-downloads">
      <a href="${app.link}">
        <button ${app.disabled ? 'disabled' : ''}>${app.disabled ? 'Soon' : 'Go'}</button>
      </a>
      ${app.github ? `
        <a href="${app.github}">
          <button class="transparent">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M0 0h24v24H0z"/><path fill="currentColor" d="M14.486 3.143a1 1 0 0 1 .692 1.233l-4.43 15.788a1 1 0 0 1-1.926-.54l4.43-15.788a1 1 0 0 1 1.234-.693M7.207 7.05a1 1 0 0 1 0 1.414L3.672 12l3.535 3.535a1 1 0 1 1-1.414 1.415L1.55 12.707a1 1 0 0 1 0-1.414L5.793 7.05a1 1 0 0 1 1.414 0m9.586 1.414a1 1 0 1 1 1.414-1.414l4.243 4.243a1 1 0 0 1 0 1.414l-4.243 4.243a1 1 0 0 1-1.414-1.415L20.328 12z"/></g></svg>
          </button>
        </a>
      ` : ''}
    </div>
  </div>
`;
  }).join('');
}

// Render the app categories
function renderApps() {
  const container = document.getElementById("appsContainer");

  let htmlContent = '';
  appsData.forEach(category => {
    htmlContent += `
  <div class="card">
    <h2>${category.category}</h2>
    <div class="app-grid">
      ${generateAppCards(category)}
    </div>
  </div>
`;
  });

  container.innerHTML = htmlContent;

// Include a note for iOS installation instructions
  const note = document.createElement('p');
  note.classList.add('light');
  note.innerHTML = 'How to install PWAs (iOS): Click/press "Go" and then "Share" then "Add to Home Screen".';
  container.appendChild(note);
}

// Render the apps when the page loads
window.onload = renderApps;