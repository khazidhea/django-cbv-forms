const input = document.querySelector('#id_text')
const button = document.querySelector('#id_text')
const form = document.querySelector('form')

form.addEventListener(
  'submit',
  function (e) {
    e.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '', true);

    xhr.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        const div = document.createElement('div');
        div.classList.add('post');

        const pText = document.createElement('p');
        pText.innerHTML = input.value;
        const pDate = document.createElement('p');
        pDate.innerHTML = new Date();

        div.appendChild(pText);
        div.appendChild(pDate);

        const topPost = document.querySelector('body > div > main > div:nth-child(2)')
        topPost.parentNode.insertBefore(div, topPost)
      }
    }

    const formData = new FormData(form);
    xhr.send(formData);
  }
)
