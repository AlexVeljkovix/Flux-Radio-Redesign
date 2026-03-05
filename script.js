// ================= CAROUSEL =================
const wrapper = document.querySelector(".carousel-wrapper");
const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let index = 0;

// ================= SCHEDULE DATA =================

const schedules = [
  [
    {
      Title: "DOBRO JUTRO LEPOTICE",
      Content:
        "Započni dan uz eksploziju afirmacije, motivacije i inspiracije. Napravi sebi nes, oseti miris kafe, opusti se i osluškuj ritam dana koji je pred tobom, saznaj više...",
    },
    {
      Title: "YUGO VOZI",
      Content:
        "Upadajte u Yuga i provozajte se sa Nikolijom i Zaretom kroz alternativnu muzičku scenu regiona. Odakle smo krenuli, gde smo sada i kuda idemo - saznacete uz YUGO VOZI! Ponedeljak, sreda i petak u 17h.",
    },
    {
      Title: "SALONSKA LEVICA",
      Content:
        "Izvol'te u salonsku… Glavna informativna emisija u kojoj Lena i Miona hrabro staju rame uz rame sa aktuelnim političkim i kulturnim dešavanjima uz pomoć njihovih saboraca - tviteraša. SALONSKA LEVICA - svakog dana u 15h.",
    },
  ],
  [
    {
      Title: "DOBRO JUTRO LEPOTICE",
      Content:
        "Započni dan uz eksploziju afirmacije, motivacije i inspiracije. Napravi sebi nes, oseti miris kafe, opusti se i osluškuj ritam dana koji je pred tobom, saznaj više...",
    },
    {
      Title: "FLUX FOTON",
      Content:
        "FLUX Foton ulazi u srž pop kulture, umetnosti i medija - kroz filozofsku prizmu osvetljava ono što često ostaje ispod površine, saznaj više...",
    },
    {
      Title: "MODNI TALAS",
      Content:
        "Od uticaja medija i influensera do nostalgije za starim stilovima, zaronite u dubine mode koja nije samo odeća, već izraz identiteta, kulture i stava. saznaj više...",
    },
  ],
  [
    {
      Title: "DOBRO JUTRO LEPOTICE",
      Content:
        "Započni dan uz eksploziju afirmacije, motivacije i inspiracije. Napravi sebi nes, oseti miris kafe, opusti se i osluškuj ritam dana koji je pred tobom, saznaj više...",
    },
    {
      Title: "YUGO VOZI",
      Content:
        "Upadajte u Yuga i provozajte se sa Nikolijom i Zaretom kroz alternativnu muzičku scenu regiona. Odakle smo krenuli, gde smo sada i kuda idemo - saznacete uz YUGO VOZI! Ponedeljak, sreda i petak u 17h.",
    },
    {
      Title: "SALONSKA LEVICA",
      Content:
        "Izvol'te u salonsku… Glavna informativna emisija u kojoj Lena i Miona hrabro staju rame uz rame sa aktuelnim političkim i kulturnim dešavanjima uz pomoć njihovih saboraca - tviteraša. SALONSKA LEVICA - svakog dana u 15h.",
    },
  ],
  [
    {
      Title: "DOBRO JUTRO LEPOTICE",
      Content:
        "Započni dan uz eksploziju afirmacije, motivacije i inspiracije. Napravi sebi nes, oseti miris kafe, opusti se i osluškuj ritam dana koji je pred tobom, saznaj više...",
    },
    {
      Title: "FLUX FOTON",
      Content:
        "FLUX Foton ulazi u srž pop kulture, umetnosti i medija - kroz filozofsku prizmu osvetljava ono što često ostaje ispod površine, saznaj više...",
    },
    {
      Title: "MODNI TALAS",
      Content:
        "Od uticaja medija i influensera do nostalgije za starim stilovima, zaronite u dubine mode koja nije samo odeća, već izraz identiteta, kulture i stava. saznaj više...",
    },
  ],
  [
    {
      Title: "DOBRO JUTRO LEPOTICE",
      Content:
        "Započni dan uz eksploziju afirmacije, motivacije i inspiracije. Napravi sebi nes, oseti miris kafe, opusti se i osluškuj ritam dana koji je pred tobom, saznaj više...",
    },
    {
      Title: "YUGO VOZI",
      Content:
        "Upadajte u Yuga i provozajte se sa Nikolijom i Zaretom kroz alternativnu muzičku scenu regiona. Odakle smo krenuli, gde smo sada i kuda idemo - saznacete uz YUGO VOZI! Ponedeljak, sreda i petak u 17h.",
    },
    {
      Title: "SALONSKA LEVICA",
      Content:
        "Izvol'te u salonsku… Glavna informativna emisija u kojoj Lena i Miona hrabro staju rame uz rame sa aktuelnim političkim i kulturnim dešavanjima uz pomoć njihovih saboraca - tviteraša. SALONSKA LEVICA - svakog dana u 15h.",
    },
  ],
];

// ================= RENDER LIST =================
const scheduleContainer = document.getElementById("schedule");

function renderSchedule(i) {
  if (!scheduleContainer) return;

  setTimeout(() => {
    scheduleContainer.innerHTML =
      "<ul>" +
      schedules[i]
        .map((item) => `<li><h3>${item.Title}</h3><p>${item.Content}</p></li>`)
        .join("") +
      "</ul>";
  }, 150);
}

// ================= SLIDE FUNCTION =================
function showSlide(i) {
  if (i < 0) index = slides.length - 1;
  else if (i >= slides.length) index = 0;
  else index = i;

  const slideWidth = slides[0].offsetWidth + 20; // margin uračunat
  wrapper.style.transform = `translateX(-${index * slideWidth}px)`;

  slides.forEach((s) => s.classList.remove("active"));
  slides[index].classList.add("active");

  renderSchedule(index);
}

// ================= BUTTON EVENTS =================
prevBtn.addEventListener("click", () => showSlide(index - 1));
nextBtn.addEventListener("click", () => showSlide(index + 1));

// ================= INIT =================
slides[index].classList.add("active");
renderSchedule(index);
