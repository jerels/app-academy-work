window.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("drivers-license-form");
  const input = document.querySelectorAll(".license__info");
  const submitButton = document.querySelector(".form__submit");

  form.addEventListener("input", event => {
    input.forEach(info => {
      if (info.id.includes(event.target.id)) {
        info.innerHTML = event.target.value;
      }
    });

  });

  // ** Phase 1B: Update license with event delegation and event.target **


  // ** Phase 2: Add focus and blur events to form inputs **
  form.addEventListener("focus", event => {
    event.target.style.backgroundColor = "lightgreen";
  }, true);

  form.addEventListener("blur", event => {
    event.target.style.backgroundColor = "initial";
  }, true);
  // ** Phase 3: Check that license numbers match **
  form.addEventListener("submit", event => {
    const numsMatch = () => {
      const licenseNumVal = document.getElementById("license-num").value;
      const licenseNumConfirmVal = document.getElementById("license-num-confirm").value;
      const licenseNumEl = document.getElementById("license-num");
      const licenseNumConfirmEl = document.getElementById("license-num-confirm");

      event.stopPropagation();
      if (licenseNumVal !== licenseNumConfirmVal) {
        event.preventDefault();
        licenseNumEl.setAttribute("style", "background-color: light coral");
        licenseNumConfirmEl.setAttribute("style", "background-color: light coral");
        alert("You shall not pass!")
      } else {
        console.log("Welcome to Oz!")
      }
    }
    numsMatch();
    // setTimeout(numsMatch, 3000);
  })
  //** Phase 4: Update submit button click count **
  let clicks = 0;
  submitButton.addEventListener("click", event => {

    clicks += 1;
    console.log(clicks);
    submitButton.innerHTML = `Submit ${clicks}`;
    event.preventDefault();


  })

});


// const button = document.getElementById("increment-count");
// const count = document.getElementById("clicked-count");
// let clicks = 0;
// button.addEventListener("click", event => {
//   clicks += 1;
//   count.innerHTML = clicks;
// });