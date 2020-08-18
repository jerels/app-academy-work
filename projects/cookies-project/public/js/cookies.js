window.addEventListener("DOMContentLoaded", (event) => {
  console.log("hellow world");

  document.cookie = "monster_name=cookie";
  document.cookie = "favorite_cookie=snickerdoodle";
  function setCookie(name, value) {
    document.cookie = `${name}=${value}`;
  };

  function getCookies() {
    let cookiePairs = document.cookie;
    return cookiePairs.split("; ");
  };

  function getCookieValue(name) {
    let cookieArr = getCookies();
    let cookiePairs = cookieArr.map(el => {
      return el.split("=");
    });
    for (let i = 0; i < cookiePairs.length; i++) {
      let el = cookiePairs[i];
      if (el.includes(name)) {
        return el[1];
      }
    }
    return null;
  }

  function deleteCookie(name) {
    let cookieArr = getCookies();
    let cookiePairs = cookieArr.map(el => {
      return el.split("=");
    });
    for (let i = 0; i < cookiePairs.length; i++) {
      let el = cookiePairs[i];
      if (el.includes(name)) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
        return;
      }
      if (i === cookiePairs.length - 1) {
        console.log("cookie not found");
      }
    }

  }

  setCookie("basic_cookie", "chocolate_chip")
  setCookie("new_cookie", "oatmeal");
  window.alert(`${document.cookie}`);

  deleteCookie("cat");
  console.log(getCookies());
});
