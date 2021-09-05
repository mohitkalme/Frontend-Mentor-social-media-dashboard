// The code below will check the user device theme preference and check and uncheck toggle button
const dark = document.getElementById("dark");

window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
  if (event.matches) {
      // Dark Mode
    document.body.classList = 'dark'
    dark.checked = false;

  } else {
      // Light Mode
    document.body.classList = 'light'
    dark.checked = true;

  }
})

// This two functions will Set the light and dark class on Body element

const setLightMode = () => {
    document.body.classList = 'light';
}

const setDarkMode = () => {
    document.body.classList = 'dark';
}


// This is the function That will check the localStorage for user preferenced theme
// And Add the dark or light class on body element
const setColorMode = () => {

    // console.log('setColorMode is doing nothing when there is nothing in local storage currently the device theme is used to set theme of website');

    if (localStorage.getItem('theme')) { // This is to assure or check there is theme key available in localstorage
     // Only then User's preference are used over the device theme setting(light or dark)


        // This will move the toggle button when the theme is light or dark by checking localstorage
        if (localStorage.getItem('theme') === 'dark') {
            dark.checked = false;
            setDarkMode();
        } else {
            dark.checked = true;
            setLightMode();
        }
        
    }
}

setColorMode(); // Invoking the function to check the Local Storage

// The code below will change the theme when user click on toggle switch At the top right corner
// This dark variable is not available in global scope

function themeChanger() {

  if (dark.checked) {

    // Setting the theme in local-Storage
    localStorage.setItem("theme", "light");

    setLightMode();

  } else {

    // Setting the theme in local-Storage
    localStorage.setItem("theme", "dark");

    setDarkMode();

  }
}
dark.addEventListener("click", themeChanger);
