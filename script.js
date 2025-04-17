// Для index.html
function proceed() {
    window.location.href = "play.html";
  }
  
  // Для play.html
  const images = [
    'image1.jpg', 'image2.jpg', 'image3.jpg',
    'image4.jpg', 'image5.jpg', 'image6.jpg',
    'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg'
  ];
  
  function changeBackground() {
    const randomIndex = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = `url(${images[randomIndex]})`;
  }
  setInterval(changeBackground, 4000);
  
  const messages = [
    "БУМ! Ты разбудил кота! 😾",
    "ПУК и воняет. Кто нажал?!",
    "НЕЕЕЕЕТ! Не жмиееее!!!",
    "Ты где кнопку нашёл? В аду?",
    "Я твоя совесть. Хватит!",
    "Каждое нажатие — минус карма.",
    "Да ты реально псих...",
    "Кнопка уходит в отпуск. Пока.",
    "Ты не уйдешь отсюда живым.",
    "Ты заплатишь за это.",
    "Ты не знаешь, на что способен я.",
    "Мой долг — поймать тебя.",
    "Ты не спасешься от меня.",
    "Тебя найдут, не переживай.",
    "Ты меня очень разозлил.",
    "Твое время истекло.",
    "Ты в моих руках.",
    "Ты не помнишь, что я способен сделать.",
    "Моя месть неизбежна.",
    "Ты пожалеешь об этом.",
    "Скоро ты будешь молить меня о пощаде.",
    "Ты не сможешь остановить меня.",
    "Твоя боль — это только начало.",
    "Ты точно почувствуешь мой гнев.",
    "Тебе не поможет никто.",
    "Ты будешь смотреть в темноту.",
    "Я поставлю тебя на колени.",
    "Ты не избежишь своей судьбы.",
    "Никто не спасет тебя.",
    "Моя тень преследует тебя.",
    "Ты будешь жалеть, что когда-то мне противостоял.",
    "Ты заплатишь за свой выбор.",
    "Ты за это поплатишься.",
    "Ты не сможешь убежать.",
    "Ты услышишь меня в своем кошмаре.",
    "Ты не вернешься домой.",
    "Ты будешь проклинать этот день.",
    "Ты не сможешь остановить меня.",
    "Моя месть безжалостна.",
    "Твоя боль — моя награда.",
    "Ты потеряешь все, что любишь.",
    "Ты не получишь прощения.",
    "Ты будешь жить в страхе.",
    "Ты заплатишь за свои поступки.",
    "Твои мучения только начались.",
    "Я сделаю твою жизнь адом.",
    "Ты умрешь в одиночестве.",
    "Ты станешь частью моей мести.",
    "Ты будешь преследуем мной.",
    "Ты не знаешь, каково это — быть моей целью.",
    "Я все равно тебя найду.",
    "Ты не сможешь убежать.",
    "Ты навсегда останешься в моей тени.",
    "Ты будешь бояться каждый шаг.",
    "Моя ярость не имеет границ.",
    "Ты не переживешь этого.",
    "Я оставлю тебя ни с чем.",
    "Ты будешь жалеть, что встретил меня.",
    "Ты научишься бояться.",
    "Ты не станешь тем, кто победит.",
    "Ты за это поплатишься дорого.",
    "Ты еще не знаешь, что тебя ждет.",
    "Твоя судьба решена."
  ];
  
  let clicks = 0;
  
  function handleClick() {
    const button = document.getElementById("crazyBtn");
    const message = document.getElementById("message");
    const counter = document.getElementById("counter");
    const sounds = [
      document.getElementById("beep"),
      document.getElementById("boop")
    ];
  
    clicks++;
    if (clicks >= 1000) {
      button.style.display = "none";
      message.textContent = "Ты победил... или проиграл? 🧠💥";
      return;
    }
  
    const msgIndex = Math.floor(Math.random() * messages.length);
    const soundIndex = Math.floor(Math.random() * sounds.length);
    sounds[soundIndex].play();
    button.textContent = messages[msgIndex];
    randomPosition(button);
    if (counter) counter.textContent = `Нажато: ${clicks}`;
  }
  
  function randomPosition(button) {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    button.style.left = x + "px";
    button.style.top = y + "px";
    button.style.transform = `rotate(${Math.random() * 720 - 360}deg)`;
    button.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  }
  
  window.onload = () => {
    const button = document.getElementById("crazyBtn");
    if (button) {
      randomPosition(button);
    }
  };
  