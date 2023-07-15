import style from "./css";

const player = {
  time: 100,
  interval: undefined,
  ui: {
    action: document.querySelector("#action"),
    demo: document.querySelector("#demo"),
  },
  n: 1,
  init: () => {
    player.ui.action.innerHTML = style.substring(0, player.n);
    player.ui.demo.innerText = style.substring(0, player.n);
    player.play();
    player.bindEvent();
  },
  bindEvent: () => {
    const hashTable = {
      "#pauseBTN": player.pause,
      "#playBTN": player.play,
      "#slowBTN": player.slow,
      "#mediumBTN": player.medium,
      "#fastBTN": player.fast,
    };
    for (let key in hashTable) {
      document.querySelector(key).onclick = hashTable[key];
    }
  },
  run: () => {
    player.n += 1;
    if (player.n > style.length) {
      window.clearInterval(player.interval);
      return;
    }
    player.ui.action.innerHTML = style.substring(0, player.n);
    player.ui.demo.innerText = style.substring(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: () => {
    player.interval = setInterval(player.run, player.time);
    console.log(player.interval);
  },
  pause: () => {
    window.clearInterval(player.interval);
  },
  slow: () => {
    player.pause();
    player.time = 300;
    player.play();
  },
  medium: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init();
