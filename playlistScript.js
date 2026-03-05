// ================= FLUX LIBRARY SELECTION =================

document.addEventListener("DOMContentLoaded", () => {
  const libraryData = {
    2023: [
      {
        img: "Slike/Playlist/2023 (1).png",
        title: "HUD (gost Bege funk)",
        text: "HUD se bavi estetikom različitih krajeva Beograda, specifičnostima koje su uticale na odrastanje mladih ljudi iz tog kraja, opšteprihvaćene vrednosti, navike i rutine zastupljene u tom kraju.",
      },
      {
        img: "Slike/Playlist/2023 (2).png",
        title: "LEKSIKON 2.0 (u gostima Maja Šuša)",
        text: "U emisiji LEKSIKON 2.0 Tamara i Mila brišu prašinu sa starih leksikona i sa sjajnim gostima razgovaraju o svim radostima i neprijatnostima odrastanja. Za kompletan povratak u prošlost biće zaduženi gosti izborom plejliste koja ih podseća na rane radove.",
      },
      {
        img: "Slike/Playlist/2023 (3).png",
        title: "KORNER epizoda 2",
        text: "Sport kao način života i fudbal kao najvažnija sporedna stvar. Pratimo utakmice, pričamo sa sportistima o aktuelnim dešavanjima u sportu, anegdotama i njihovim životnim putevima.",
      },
    ],

    2022: [
      {
        img: "Slike/Home/fluxBiblioteka1.png",
        title: "VRUĆA LINIJA tinder",
        text: "Kako tinder utiče na mogućnosti odabira osobe za nas...",
      },
      {
        img: "Slike/Home/fluxBiblioteka2.png",
        title: "KIBIC PENDŽER ep1.2",
        text: "Interaktivna emisija gde slušaoci kreiraju program.",
      },
      {
        img: "Slike/Home/fluxBiblioteka3.png",
        title: "POV sa društvom",
        text: "Playlist koja vas vodi na sunčanu obalu.",
      },
    ],

    2021: [
      {
        img: "Slike/Playlist/2021 (1).png",
        title: "REALNO, NE? - BINDŽ",
        text: "Prosečno vreme provedeno na Netfliksu 2020. godine je 3.2 sata dnevno. To bi bilo 22,4 sata nedeljno (skoro jedan ceo dan), ili oko mesec i po dana godišnje. Zašto su serije toliko popularne? Zašto se toliko snimaju? Zašto ih bindžujemo? Kakav je kvalitet serija koje gledamo i kakve se teme u njima obrađuju? Koje su to popularne serije i na koje treba da obratimo pažnju?",
      },
      {
        img: "Slike/Playlist/2021 (2).png",
        title: "REALNO, NE? - VRLI NOVI RIJALITI",
        text: " Od svog nastanka početkom devedesetih godina prošlog veka, rijaliti programi publici celog sveta pružaju beskonačne mogućnosti za zabavu, samoidentifikaciju i trošenje slobodnog vremena. Prateći zamah popularnosti emisija ovog tipa, načina na koji je u nekim od najpoznatijih rijaliti programa u našem okruženju predstavljena stvarnost.",
      },
      {
        img: "Slike/Playlist/2021 (3).png",
        title: "REALNO, NE? - E-SPORT, ZABAVA ILI SPORT",
        text: `Šta u stvari znači biti gejmer? Da li je toobi ili profesija? I možemo li gejming smatrati sportom? Emisija "E-sport, zabava ili sport" se bavi temom gejming industrije, razlikama između profesionalnih igrača, kontent kreatora i strimera, kao i načinima na koje se može zarađivati od video igara.`,
      },
    ],

    2020: [
      {
        img: "Slike/Playlist/2020 (1).png",
        title: "A JESI LI PROBALA DA MEDITIRAŠ? EP 2",
        text: `Interaktivna emisija " A jesi li probala da meditiraš?" je (ne)uspešna meditacija koja vas podstiče da uzmete slušalice, izađete napolje i pratite instrukcije koje vas navode na razmišljanje da li je meditacija pravo rešenje u stresnim momentima.`,
      },
      {
        img: "Slike/Playlist/2020 (2).png",
        title: "AUDIO ŠTOS EP2",
        text: `U emisiji "Audio Štos" Aleksa Nikolić, David Novković i Stefan Vuković pričaće nam o tome kako su počeli sa stvaranjem home made muzike,kuda ih je to vodilo, kroz koje su žanrove prošli, a čućemo i njihove kako objavljene tako i neobjavljene pesme.`,
      },
      {
        img: "Slike/Playlist/2020 (3).png",
        title: "PRVI JUTARNJI... EP 3",
        text: `U emisiji "Prvi jutarnji..." čućete prve jutarnje vesti o aktuelnim događajima na ulici i van nje prožete pozitivnom energijom i zabavnom muzikom. Emisija će biti posvećena prikazivanju ulice kao prostora solidarnosti, razmene energije i akcije.`,
      },
    ],

    2019: [
      {
        img: "Slike/Playlist/2019 (1).png",
        title: "FLUX PLEJLISTA 005 / marr #nemir",
        text: "Dobro jutro, nemirni narode je plejlista za buđenje bez iluzija — ritam za telo koje hoće da krene, ali i um koji još sumnja. Između aerobiške ironije, industrijskog pulsa i intimnih elektronskih momenata, ovo je jutro za one koji ne traže mir, nego pokret. Za ustajanje, trzaj, lagani haos i prvo jasno da danu koji neće biti jednostavan.",
      },
      {
        img: "Slike/Playlist/2019 (2).png",
        title: "FLUX PLEJLISTA 004 / flopi_disk #nemir",
        text: "Kad bi svaki dan bio nedelja popodne je plejlista za stanje između — kad vreme uspori, misli se razmile, a telo odbije da žuri. Topli R&B, meki alt-pop i blagi eksperimentalni momenti stvaraju zvuk za ležanje na podu, poluotvorene prozore i razgovore koji nemaju zaključak. Za dane bez obaveza, tihe čežnje i onu finu, lenju jasnoću pred veče.",
      },
      {
        img: "Slike/Playlist/2019 (3).png",
        title: "FLUX PLEJLISTA 002 / dajmitri #nemir",
        text: `„Nisam hladan, samo sam melanholičan.” je plejlista za stanje tihe dubine — kad emocije ne prave dramu, ali ostaju. Kad svet spolja deluje sporije, a iznutra sve pulsira blagom, postojanom setom. Ovo je zvuk za večernje sate bez poruka, za grad koji svetli kroz prozor i misli koje se vraćaju bez najave.`,
      },
    ],

    2018: [
      {
        img: "Slike/Playlist/2018 (1).png",
        title: "MALI NOĆNI STUDIO | 08. 11. 2018.",
        text: "U Malom noćnom studiju muzičkom ulazimo u Fluksovverzum  prostor gde se muzika, zvuk i ideja stalno pomeraju, sudaraju i menjaju oblik. Kroz razgovor, performans i eksperiment, emisija ispituje šta se dešava kada se ritam otme kontroli, žanrovi rastvore, a smisao nastane baš iz nestabilnosti.",
      },
      {
        img: "Slike/Playlist/2018 (2).png",
        title: "LAKRDIJA | 09. 11. 2018.",
        text: "U trećoj i poslednjoj epizodi poligon za igru u Lakrdiji bili su mediji, društvene mreže, rijaliti programi, medijski mrak, senzacionalizam i naravno lažne vesti. Vodeći se aforizmom da osim što informišu i zabavljaju, mediji vrlo uspešno dižu pritisak našim gostima, profesionalcima iz oblasti medija, merili smo pritisak kako bismo saznali da li je ovaj aforizam mit ili istina.",
      },
      {
        img: "Slike/Playlist/2018 (3).png",
        title: "KAFANSKO VEČE KOD FAZANA pt.2 | 09. 11. 2018.",
        text: "Nikolija i Ema ukrašavaju studio kariranim stolnjacima, puštaju meraku na volju, padaju u karasevdah uz najbolje kafanske pesme, anegdote, mudrosti i istine. U kafanu dolaze i kolege koje su zajedno sa njima prethodnih dana kreirale program Flux radija, nazdravljaju u to ime i prisećaju se najboljih trenutaka. ",
      },
    ],
  };

  const choices = document.querySelectorAll(".flux-library-choice");
  const container = document.querySelector(".flux-biblioteka-content");

  function renderCards(year) {
    const data = libraryData[year];
    if (!data) return;

    const button = container.querySelector(".flux-biblioteka-button");
    container.innerHTML = "";

    data.forEach((item, i) => {
      const card = document.createElement("div");
      card.className = `card flux-biblioteka${i + 1}`;

      card.innerHTML = `
        <img src="${item.img}" alt="">
        <div class="flux-biblioteka-card-text">
          <div class="biblioteka-card-heading-container">
            <h3>${item.title}</h3>
            <img src="Slike/Home/play1.png" alt="Play">
          </div>
          <p>${item.text}</p>
        </div>
      `;

      container.appendChild(card);
    });

    // vrati dugme na kraj ako postoji
    if (button) container.appendChild(button);
  }

  /* =======================
     KLIK NA GODINU
  ======================= */
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      choices.forEach((c) => c.classList.remove("active"));
      choice.classList.add("active");

      const year = choice.dataset.year;
      renderCards(year);
    });
  });

  /* =======================
     AUTOMATSKI LOAD AKTIVNE
  ======================= */
  const activeChoice = document.querySelector(".flux-library-choice.active");
  if (activeChoice) {
    renderCards(activeChoice.dataset.year);
  }
});
