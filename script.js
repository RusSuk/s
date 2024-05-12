const weddingDate = new Date("2024-08-10T16:00:00").getTime(); // Замените на вашу дату

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // document.getElementById("days").innerHTML = days + " Дней ";
    // document.getElementById("hours").innerHTML = hours + " Часов ";
    // document.getElementById("minutes").innerHTML = minutes + " Минут ";
    // document.getElementById("seconds").innerHTML = seconds + " Секунд ";
    document.getElementById("days").innerHTML = `<span class="number">${days}</span><span class="text"> Дней</span>`;
    document.getElementById("hours").innerHTML = `<span class="number">${hours}</span><span class="text"> Часов</span>`;
    document.getElementById("minutes").innerHTML = `<span class="number">${minutes}</span><span class="text"> Минут</span>`;
    document.getElementById("seconds").innerHTML = `<span class="number">${seconds}</span><span class="text"> Секунд</span>`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Наша свадьба состоялась!";
    }
}, 1000);


function doPost(e) {
    spreadsheet_id = '1aqpvEi8Z7CKhuh9c9XFtxZ3jTBrV-cIphmYZmsNW5wc'
    var sheet = SpreadsheetApp.openById(spreadsheet_id).getActiveSheet();
    var rowData = [];
    rowData.push(new Date()); // Добавляем текущую дату и время
    rowData.push(e.parameter.name);
    rowData.push(e.parameter.name2);
    rowData.push(e.parameter.attendance);
    rowData.push(e.parameter.attendance_children);
    rowData.push(e.parameter.name_children);
    rowData.push(e.parameter.alcohol);
    rowData.push(e.parameter.food);
    rowData.push(e.parameter.message);
    sheet.appendRow(rowData);
    console.log("e.parameter.alcohol:", e.parameter.alcohol); 

    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  }

  function submitForm(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию
    var formData = new FormData(document.getElementById("guestForm"));
    // fetch('https://script.google.com/macros/s/AKfycbx3gwTI7RYjUDUfI_qYl4sSQ-qK6p2oZpLMqsn0mwVntI6p_ccbmV6G1mKhH26S5HroLw/exec', { 
    fetch('https://script.google.com/macros/s/AKfycbzMVE4JX1h6zfYyqxeOqXJMwTPsi20tUb-dz97fDOSBSs7TvNCF_F5KKE-KEyRYCdT51A/exec', { 
    
    
    method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      alert('Бро, тебя записали) Хавчик с собой не забудь)');
      document.getElementById("guestForm").reset(); // Очищаем форму после отправки
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      alert('Произошла ошибка при отправке данных.');
    });
  }


  setTimeout(function() {
    // Ваш код, который должен выполниться после задержки в 1 секунду
  }, 5000); // Задержка в 1000 миллисекунд (1 секунда)
  


  document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'logo1') {
                  console.log("Сюда код зашел! Появление элемента:", entry.target.id); 

                  setTimeout(function() {
                    entry.target.classList.remove("hidden");
                    entry.target.classList.add("visible-far");
                  }, 2000); 
                } 
                else if (entry.target.id === 'Ангелина') {
                  console.log("Сюда код зашел! Появление элемента:", entry.target.id); // Вывод сообщения в консоль

                  setTimeout(function() {
                    entry.target.classList.remove("hidden");
                    entry.target.classList.add("visible-left");
                  }, 4000); 
                }

                else if (entry.target.id === 'Руслан') {
                    setTimeout(function() {
                      entry.target.classList.remove("hidden");
                      entry.target.classList.add("visible-right");
                    }, 4000); 
                }

                else if (entry.target.id === 'Диана') {
                  console.log("Сюда код зашел! Появление элемента:", entry.target.id); // Вывод сообщения в консоль

                  setTimeout(function() {
                    entry.target.classList.remove("hidden");
                    entry.target.classList.add("visible-left");
                  }, 6000); 
                }

                else if (entry.target.id === 'Михаил') {
                    setTimeout(function() {
                      entry.target.classList.remove("hidden");
                      entry.target.classList.add("visible-right");
                    }, 6000); 
                }
                
                else if (entry.target.id === 'logo2') {
                  console.log("Сюда код зашел! Появление элемента:", entry.target.id); // Вывод сообщения в консоль

                  setTimeout(function() {
                    entry.target.classList.remove("hidden");
                    entry.target.classList.add("visible-far");
                  }, 6000); 
                }
                else{
                  console.log("Сюда код зашел! Появление элемента:", entry.target.id); // Вывод сообщения в консоль
                 
                  entry.target.classList.remove("hidden");
                  entry.target.classList.add("visible");
                }
                // Отменяем наблюдение за элементом после его появления
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: "300px",
        threshold: 0.1 // Элемент должен быть виден на 10% прежде чем активировать обработчик
    });

    // Добавляем все элементы с классом 'hidden' в наблюдение
    document.querySelectorAll('.hidden').forEach((el) => {
        observer.observe(el);
    });
    
    // Специфический наблюдатель для 'guest-form'
    const guestFormObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              console.log("guest-form появился на экране");
              entry.target.classList.remove("hidden_guest");
              entry.target.classList.add("visible");
              guestFormObserver.unobserve(entry.target);
          }
      });
  }, {
      rootMargin: "200px",
      threshold: 0.1
  });

  // Применяем специфический наблюдатель к 'guest-form'
  const guestForm = document.querySelector('#guest-form');
  if (guestForm) {
      guestFormObserver.observe(guestForm);
  }
});

window.addEventListener('scroll', function() {
  var element = document.getElementById('first');
  var position = element.getBoundingClientRect();

  if(position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add('animated');
  }
});


// Выбираем все фотографии в контейнерах 1 и 2
const photos1 = document.querySelectorAll('.photo-container1 img');
const photos2 = document.querySelectorAll('.photo-container2 img');
const photos3 = document.querySelectorAll('.photo-container img');


// Добавляем обработчики событий для каждой фотографии в контейнере 1
photos1.forEach(photo => {
  photo.addEventListener('mousemove', (e) => {
    const xPos = (e.clientX - photo.offsetLeft - (photo.offsetWidth / 2)) / 10;
    const yPos = (e.clientY - photo.offsetTop - (photo.offsetHeight / 2)) / 10;
    photo.style.transform = `translate(${xPos}px, ${yPos}px) scale(2)`; 
  });

  photo.addEventListener('mouseleave', () => {
    photo.style.transform = 'translate(0, 0) scale(1)'; 
  });
});

// Добавляем обработчики событий для каждой фотографии в контейнере 2
photos2.forEach(photo => {
  photo.addEventListener('mousemove', (e) => {
    const xPos = (e.clientX - photo.offsetLeft - (photo.offsetWidth / 2)) / 10;
    const yPos = (e.clientY - photo.offsetTop - (photo.offsetHeight / 2)) / 10;
    photo.style.transform = `translate(${xPos}px, ${yPos}px) scale(2)`; 
  });

  photo.addEventListener('mouseleave', () => {
    photo.style.transform = 'translate(0, 0) scale(1)'; 
  });
});

// Добавляем обработчики событий для каждой фотографии в контейнере 3
photos3.forEach(photo => {
  photo.addEventListener('mousemove', (e) => {
    const xPos = (e.clientX - photo.offsetLeft - (photo.offsetWidth / 2)) / 10;
    const yPos = (e.clientY - photo.offsetTop - (photo.offsetHeight / 2)) / 10;
    photo.style.transform = `translate(${xPos}px, ${yPos}px) scale(2)`; 
  });

  photo.addEventListener('mouseleave', () => {
    photo.style.transform = 'translate(0, 0) scale(1)'; 
  });
});

// Добавляем обработчики событий для каждой фотографии в контейнере 4
photos4.forEach(photo => {
  photo.addEventListener('mousemove', (e) => {
    const xPos = (e.clientX - photo.offsetLeft - (photo.offsetWidth / 2)) / 10;
    const yPos = (e.clientY - photo.offsetTop - (photo.offsetHeight / 2)) / 10;
    photo.style.transform = `translate(${xPos}px, ${yPos}px) scale(2)`; 
  });

  photo.addEventListener('mouseleave', () => {
    photo.style.transform = 'translate(0, 0) scale(1)'; 
  });
});
