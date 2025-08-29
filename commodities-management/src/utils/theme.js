export const applyTheme = (theme) => {
  if (theme === "dark") {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#ffffff";
  } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
  }
};
