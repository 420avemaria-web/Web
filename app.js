const questions = [
  {title:"Что чаще всего напоминает о себе?",hint:"Выберите самый привычный для вас вариант.",answers:[
    ["Шея, затылок или голова",{head:3,axis:1}],["Плечи и зона между лопатками",{breath:2,head:1}],["Поясница, таз или ноги",{pelvis:3,axis:1}],["Напряжение перемещается по телу",{axis:3}]]},
  {title:"Как тело реагирует на долгую работу сидя?",hint:"Не анализируйте — отметьте первое узнавание.",answers:[
    ["Тяжелеет голова, хочется размять шею",{head:3}],["Плечи поднимаются, дыхание становится поверхностным",{breath:3}],["Хочется постоянно менять положение",{axis:2,pelvis:1}],["Затекает поясница или одна нога",{pelvis:3}]]},
  {title:"Есть ли ощущение асимметрии?",hint:"Например, в зеркале, одежде, обуви или движении.",answers:[
    ["Одно плечо кажется выше",{axis:3,head:1}],["Таз или шаг ощущаются неодинаково",{pelvis:3,axis:1}],["Голову легче поворачивать в одну сторону",{head:3}],["Явной асимметрии не замечаю",{breath:1}]]},
  {title:"Что происходит в напряжённые дни?",hint:"Речь не о диагнозах, а о вашей телесной реакции.",answers:[
    ["Сжимаю челюсть, напрягаю лоб",{head:3}],["Замираю и словно перестаю дышать глубоко",{breath:3}],["Становлюсь скованнее целиком",{axis:3}],["Тянет поясницу или низ живота",{pelvis:3}]]},
  {title:"Как вы обычно просыпаетесь?",hint:"Оцените большинство обычных утр, а не один случай.",answers:[
    ["С тяжестью в голове или затылке",{head:3}],["С зажатыми плечами или грудной клеткой",{breath:3}],["Тело нужно «расходить» целиком",{axis:3}],["С дискомфортом в пояснице или тазу",{pelvis:3}]]},
  {title:"Где сложнее всего почувствовать свободу движения?",hint:"Выберите движение, которое хочется сделать прямо сейчас.",answers:[
    ["Повернуть или наклонить голову",{head:3}],["Расправить плечи и глубоко вдохнуть",{breath:3}],["Мягко скрутиться всем корпусом",{axis:3}],["Свободно наклониться или шагнуть",{pelvis:3}]]},
  {title:"Как быстро тело расслабляется после отдыха?",hint:"Подумайте о выходном, массаже или спокойном вечере.",answers:[
    ["Голова отдыхает, но шея остаётся плотной",{head:3}],["Становится легче дышать, но ненадолго",{breath:3}],["Одна зона отпускает — другая включается",{axis:3}],["Поясница и таз расслабляются последними",{pelvis:3}]]},
  {title:"Что вы замечаете во время ходьбы?",hint:"Если не наблюдали — выберите самый близкий вариант.",answers:[
    ["Голова или плечи поданы вперёд",{head:2,breath:1}],["Руки двигаются неодинаково",{axis:3}],["Шаг одной ногой ощущается иначе",{pelvis:3}],["Дыхание сбивается или становится мелким",{breath:3}]]},
  {title:"Чего вы хотите от работы с телом сейчас?",hint:"Это поможет точнее подобрать следующий материал.",answers:[
    ["Больше ясности и лёгкости в голове",{head:3}],["Дышать свободнее и отпускать контроль",{breath:3}],["Вернуть ощущение собранности и баланса",{axis:3}],["Двигаться увереннее и устойчивее",{pelvis:3}]]}
];

const profiles = {
  head:{eyebrow:"Профиль 01 · верхняя часть оси",title:"Больше внимания просит верхняя часть оси",summary:"В ваших ответах чаще повторяются ощущения в затылке, шее, челюсти и плечевом поясе. Это не означает, что причина находится именно в шее или атланте: на очной встрече важно оценить голову, грудную клетку, таз и опору как единую систему.",zones:["затылок и шея","челюсть","плечевой пояс"],article:"Почему напряжение в шее нельзя сводить к одной мышце",recommendation:"Начните с очной оценки положения головы и шеи, движения плечевого пояса и общей оси тела."},
  breath:{eyebrow:"Профиль 02 · дыхательная зона",title:"Напряжение заметнее в дыхательной зоне",summary:"В ваших ответах повторяется связь между напряжёнными днями, положением плеч, грудной клеткой и глубиной дыхания. Онлайн-карта показывает этот паттерн, но не определяет его причину.",zones:["грудная клетка","дыхание","плечевой пояс"],article:"Дыхание, плечи и фасциальные натяжения: где искать связь",recommendation:"На очной оценке стоит посмотреть движение грудной клетки, плеч, головы и шеи, а также то, как тело организует опору."},
  axis:{eyebrow:"Профиль 03 · ось тела",title:"Нагрузка ощущается по всей оси",summary:"Ощущения в ваших ответах чаще перемещаются или проявляются несимметрично. Поэтому полезно не изолировать одну точку, а проверить, как между собой согласуются голова, грудная клетка, таз и опора.",zones:["голова и корпус","плечевой пояс","таз"],article:"Почему локальная работа не всегда меняет общий паттерн",recommendation:"Начните с очной оценки всей оси тела в положении лёжа, сидя и в движении."},
  pelvis:{eyebrow:"Профиль 04 · опора",title:"Больше нагрузки ощущается в опоре",summary:"В ваших ответах чаще повторяются ощущения в пояснице, тазу, ногах и шаге. Место дискомфорта не обязательно является началом цепочки, поэтому на очной встрече оценивается всё тело.",zones:["поясница","таз","стопы и шаг"],article:"Таз, шаг и опора: как тело распределяет нагрузку",recommendation:"Начните с очной оценки таза, шага и опоры — в связи с положением корпуса и головы."}
};

const app = document.querySelector('#app');
let step = -1;
let chosen = [];
const arrow = '<span aria-hidden="true">↗</span>';

function header(side='') { return `<header class="topbar compact"><button class="wordmark" data-home>НЕЙРОФАСЦИАЛЬНАЯ КОРРЕКЦИЯ</button>${side}</header>`; }
function bindHome(){ document.querySelector('[data-home]')?.addEventListener('click',home); }

function home(){
  step=-1; chosen=[]; window.scrollTo(0,0);
  app.innerHTML=`<main class="home-shell">
    <header class="topbar"><span class="wordmark">НЕЙРОФАСЦИАЛЬНАЯ КОРРЕКЦИЯ</span><span class="trust-pill"><i></i> Бесплатно <b>•</b> Без регистрации</span></header>
    <section class="hero"><div class="fascia-art" aria-hidden="true"></div><div class="hero-copy reveal">
      <p class="index">01 <i>/</i> 09</p><h1>Где тело<br>удерживает<br>напряжение?</h1>
      <p class="lead">9 вопросов помогут заметить повторяющийся паттерн нагрузки и понять, с чего начать очную работу с телом</p>
      <button class="primary-button hero-button" data-start>Начать — 3 минуты ${arrow}</button>
      <p class="disclaimer"><span>◇</span> Не является медицинской диагностикой</p></div></section>
    <section class="benefits"><article><span>✦</span><div><b>Увидеть не точку, а связь</b><p>Как шея, плечи, дыхание, таз и опора отзываются вместе.</p></div></article><article><span>≈</span><div><b>Без онлайн-диагнозов</b><p>Карта отражает ответы, но не устанавливает причину симптомов.</p></div></article><article><span>⌁</span><div><b>Понятный следующий шаг</b><p>Персональный материал и рекомендация по очной оценке.</p></div></article></section>
    <section class="about-method"><p class="eyebrow">Подход Александра Земцова</p><h2>Не «вправить» одну точку, а увидеть систему</h2><p>Нейрофасциальная коррекция — авторская телесная практика, в которой оцениваются движение, положение головы и шеи, таз, опора, фасциальные натяжения и реакция нервной системы. В работу могут входить «Нейроправка Атланта™», «Спинатрия™» и фасциальная коррекция — объём определяется после очной оценки.</p></section>
    <footer>Информационный материал · При острых или тревожных симптомах обратитесь к врачу</footer></main>`;
  document.querySelector('[data-start]').addEventListener('click',()=>{step=0;renderQuestion();});
}

function renderQuestion(){
  const q=questions[step]; const progress=((step+1)/questions.length)*100;
  app.innerHTML=`<main class="quiz-shell">${header(`<span class="question-count">0${step+1} <i>/</i> 09</span>`)}<div class="progress-track"><span style="width:${progress}%"></span></div>
    <section class="question-layout"><div class="question-copy reveal"><p class="eyebrow">Вопрос ${step+1} из 9</p><h1>${q.title}</h1><p>${q.hint}</p></div>
    <div class="answers reveal">${q.answers.map((a,i)=>`<button data-answer="${i}"><span>0${i+1}</span>${a[0]}${arrow}</button>`).join('')}${step?'<button class="back-button" data-back>← Назад</button>':''}</div></section>
    <p class="quiz-disclaimer">Отвечайте по ощущениям. Тест не ставит диагнозов.</p></main>`;
  bindHome();
  document.querySelectorAll('[data-answer]').forEach(btn=>btn.addEventListener('click',()=>{chosen[step]=Number(btn.dataset.answer);if(step===8)result();else{step++;renderQuestion();}}));
  document.querySelector('[data-back]')?.addEventListener('click',()=>{chosen.pop();step--;renderQuestion();});
}

function getProfile(){
  const scores={head:0,breath:0,axis:0,pelvis:0};
  chosen.forEach((n,i)=>Object.entries(questions[i].answers[n][1]).forEach(([k,v])=>scores[k]+=v));
  return Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0];
}

function result(){
  const p=profiles[getProfile()]; window.scrollTo(0,0);
  app.innerHTML=`<main class="result-shell">${header('<span class="trust-pill"><i></i> Ваш результат готов</span>')}
    <section class="result-hero"><div class="result-copy reveal"><p class="eyebrow">${p.eyebrow}</p><h1>${p.title}</h1><p class="result-summary">${p.summary}</p><div class="zone-list" aria-label="Зоны внимания">${p.zones.map((z,i)=>`<span><b>0${i+1}</b>${z}</span>`).join('')}</div></div>
    <div class="result-map" aria-hidden="true"><div class="map-orbit orbit-one"></div><div class="map-orbit orbit-two"></div><div class="map-center"><span>ваша</span><strong>КАРТА</strong><span>напряжения</span></div></div></section>
    <section class="next-steps"><article class="recommend-card"><p class="card-label">С чего начать</p><h2>${p.recommendation}</h2><p>Результат отражает только ваши ответы и помогает выбрать направление для наблюдения. Он не подтверждает причину симптомов.</p></article>
    <article class="article-card"><p class="card-label">Материал для вас · 6 минут</p><h2>${p.article}</h2><button class="text-link" data-article>Прочитать статью ${arrow}</button></article></section>
    <article class="method-article reveal" data-article-body hidden><p class="eyebrow">Как проходит работа</p><h2>Нейрофасциальная коррекция: сначала оценка, затем работа</h2><p>Метод не сводит тело к одной «проблемной» мышце. На очной встрече Александр оценивает положение головы и шеи, таз и опору, движение, скольжение тканей, фасциальные натяжения и реакцию нервной системы.</p><p>Сессия включает оценку лёжа и сидя, точечную и фасциальную работу, а затем повторную проверку до и после воздействия. В работу могут входить «Нейроправка Атланта™», «Спинатрия™» и фасциальная коррекция. Часто требуется 2–3 встречи, но частота и объём определяются индивидуально.</p><p>После работы человек может заметить лёгкость, более свободное движение, изменения в опоре или дыхании. Результат всегда индивидуален и не может быть гарантирован заранее.</p><blockquote>Онлайн-карта показывает, какие ощущения повторяются в ваших ответах. Она не устанавливает причину и не заменяет очную оценку.</blockquote></article>
    <section class="booking-panel"><div><p class="eyebrow">Подробнее о методе</p><h2>Хотите узнать, как работает нейрофасциальная коррекция?</h2><p>На странице метода Александр подробно рассказывает о подходе и формате работы. Там же можно выбрать удобный следующий шаг — записаться на очную оценку или перейти в Telegram-канал.</p></div><div class="booking-actions"><a class="primary-button" href="https://neuro-zemtsov.taplink.ws/" target="_blank" rel="noopener noreferrer">Узнать о методе ${arrow}</a><button class="secondary-button" data-restart>Пройти ещё раз</button></div></section>
    <footer>Информационно-оздоровительный материал. Метод не заменяет медицинскую диагностику и лечение. При боли, онемении или неврологических симптомах обратитесь к врачу.</footer></main>`;
  bindHome();
  document.querySelector('[data-restart]').addEventListener('click',home);
  document.querySelector('[data-article]').addEventListener('click',e=>{const el=document.querySelector('[data-article-body]');el.hidden=!el.hidden;e.currentTarget.innerHTML=el.hidden?`Прочитать статью ${arrow}`:'Свернуть статью';if(!el.hidden)el.scrollIntoView({behavior:'smooth'});});
}

home();
