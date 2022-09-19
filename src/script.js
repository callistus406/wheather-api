// export function script() {
//   const menuBtn = document.querySelector(".menu-btn");
//   const drawer = document.querySelector(".drawer");
//   let menuOpen = true;
//   console.log("rrererere");
//   menuBtn.addEventListener("click", function () {
//     if (!menuOpen) {
//       menuBtn.classList.add("open");
//       menuOpen = true;
//       drawer.style.left = "50%";
//     } else {
//       menuBtn.classList.remove("open");
//       drawer.style.left = "101%";
//       menuOpen = false;
//     }
//   });
// }

const obj = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1620496800,
      main: {
        temp: 295.67,
        feels_like: 296.07,
        temp_min: 294.72,
        temp_max: 295.67,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 925,
        humidity: 80,
        temp_kf: 0.95,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 77,
      },
      wind: {
        speed: 4.6,
        deg: 217,
        gust: 9.2,
      },
      visibility: 10000,
      pop: 0.68,
      rain: {
        "3h": 1.69,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2021-05-08 18:00:00",
    },
  ],
};
console.log(obj.list[0].weather[0].description);
