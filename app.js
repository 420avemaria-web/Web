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
  head:{eyebrow:"Профиль 01 · верхняя цепь",title:"Напряжение концентрируется сверху",summary:"По вашим ответам чаще всего отзывается связка «голова — шея — плечевой пояс». Когда одна зона долго компенсирует нагрузку, ощущение плотности может сохраняться даже после отдыха.",zones:["затылок и шея","челюсть","плечевой пояс"],article:"Почему шея может оставаться напряжённой, даже когда вы отдыхаете",recommendation:"Начните с очной оценки привычных паттернов положения головы, шеи и плеч — без попытки исправлять отдельную точку силой."},
  breath:{eyebrow:"Профиль 02 · дыхательная цепь",title:"Тело удерживает защитное напряжение",summary:"В ответах заметна связь между стрессом, положением плеч и глубиной дыхания. Это не значит, что причина только в дыхании: тело может поддерживать привычную форму целой системой компенсаций.",zones:["грудная клетка","диафрагма","плечи"],article:"Как стресс меняет дыхательный объём и ощущение свободы в теле",recommendation:"Полезно исследовать, какие положения позволяют дышать свободнее, а затем оценить всю цепь — от основания черепа до грудной клетки."},
  axis:{eyebrow:"Профиль 03 · осевая цепь",title:"Тело распределяет нагрузку по цепочке",summary:"Ваши ощущения чаще перемещаются или проявляются асимметрично. Это похоже на ситуацию, когда тело не изолирует нагрузку в одной точке, а перераспределяет её между несколькими уровнями.",zones:["ось головы и корпуса","плечи","таз"],article:"Почему работа только с местом напряжения не всегда даёт устойчивый эффект",recommendation:"Вместо поиска одной «виноватой» мышцы стоит посмотреть на взаимное положение головы, грудной клетки и таза в движении."},
  pelvis:{eyebrow:"Профиль 04 · опорная цепь",title:"Основная компенсация ощущается в опоре",summary:"По ответам больше внимания просит связка «поясница — таз — ноги». На ощущение устойчивости могут влиять не только локальные ткани, но и то, как нагрузка проходит через всё тело.",zones:["поясница","таз","стопы и шаг"],article:"Как тело ищет опору: связь таза, шага и положения корпуса",recommendation:"Начните с наблюдения за опорой и шагом, а на очной оценке проверьте, как нижняя часть тела согласуется с положением корпуса и головы."}
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
      <p class="lead">Ответьте на 9 вопросов и получите персональную карту возможных компенсаций</p>
      <button class="primary-button hero-button" data-start>Начать — 3 минуты ${arrow}</button>
      <p class="disclaimer"><span>◇</span> Не является медицинской диагностикой</p></div></section>
    <section class="benefits"><article><span>✦</span><div><b>Понимание через тело</b><p>Заметьте повторяющиеся ощущения и связи.</p></div></article><article><span>≈</span><div><b>Мягкий подход</b><p>Без пугающих выводов и ярлыков.</p></div></article><article><span>⌁</span><div><b>Персональная карта</b><p>Материал и следующий шаг по ответам.</p></div></article></section>
    <section class="about-method"><p class="eyebrow">Почему карта, а не диагноз</p><h2>Тело — не набор отдельных деталей</h2><p>Ощущения в шее, плечах, дыхании или пояснице могут быть частью более широкой стратегии компенсации. Тест помогает увидеть паттерн в собственных ответах, но не делает медицинских заключений.</p></section>
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
    <article class="method-article reveal" data-article-body hidden><p class="eyebrow">Понимание через тело</p><h2>Не отдельная точка, а система связей</h2><p>Фасции образуют непрерывную сеть соединительной ткани. Поэтому ощущение напряжения в одной области не всегда означает, что именно там начинается вся цепочка нагрузки. Положение головы влияет на то, как организуется корпус; опора меняет работу таза; дыхание взаимодействует с грудной клеткой и плечевым поясом.</p><p>Нейрофасциальный подход рассматривает не только место жалобы, но и то, как тело распределяет нагрузку в покое и движении. Онлайн-опрос не способен оценить эти взаимосвязи — для этого нужны наблюдение, функциональные пробы и очная работа специалиста.</p><blockquote>Цель первого шага — не «найти поломку», а понять, какую стратегию тело использует сейчас.</blockquote></article>
    <section class="booking-panel"><div><p class="eyebrow">Следующий шаг</p><h2>Хотите увидеть свою цепочку компенсаций вживую?</h2><p>На встрече специалист оценивает тело целиком и объясняет наблюдения понятным языком.</p></div><div class="booking-actions"><button class="primary-button" data-booking>Ссылка на запись скоро ${arrow}</button><button class="secondary-button" data-restart>Пройти ещё раз</button></div></section>
    <footer>Информационный материал. Не является медицинской диагностикой и не заменяет обращение к врачу.</footer></main>`;
  bindHome();
  document.querySelector('[data-restart]').addEventListener('click',home);
  document.querySelector('[data-booking]').addEventListener('click',()=>alert('Ссылка на онлайн-запись будет добавлена перед запуском.'));
  document.querySelector('[data-article]').addEventListener('click',e=>{const el=document.querySelector('[data-article-body]');el.hidden=!el.hidden;e.currentTarget.innerHTML=el.hidden?`Прочитать статью ${arrow}`:'Свернуть статью';if(!el.hidden)el.scrollIntoView({behavior:'smooth'});});
}

home();
