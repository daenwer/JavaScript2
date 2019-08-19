import axios from 'axios';
import qs from 'query-string';

const formForFetch = document.getElementById('formForFetch');
const formForGenerate = document.getElementById('formForGenerate');
const bodyForMemesList = document.getElementById('memesList');
const bodyForMeme = document.getElementById('createdMeme');

let selectedImageId = null;

const memesService = {
  async get(count) {
    const response = await axios('https://api.imgflip.com/get_memes');

    let list = response.data.data.memes;
    list = list.slice(0, count);
    return list;
  },
  async create(text0, text1) {
    let data = {
      template_id: selectedImageId,
      username: 'g_user_107257642549096835361',
      password: '1234',
      text0,
      text1
    };
    data = qs.stringify(data);
    const response = await axios.post('https://api.imgflip.com/caption_image', data);
    return response.data.data.url;
  }
};

formForFetch.onsubmit = function (e) {
  e.preventDefault();

  const input = formForFetch.querySelector('[name="count"]');
  const count = input.value;

  createMemesList(count);
};

async function createMemesList(count) {
  // почистить обертку bodyForMemesList
  bodyForMemesList.innerHTML = '';
  
  // получить массив
  const list = await memesService.get(count);
  
  // перебрать массив
  list.forEach(item => {
    // для каждой ячейки массива создать разметку
    const image = createImage(item);
    // пихнуть .appenChild() в обертку bodyForMemesList
    bodyForMemesList.appendChild(image);
  });
}

function createImage(data) {
  const image = document.createElement('img');
  image.src = data.url;
  image.alt = '';
  image.style.height = '80px';
  image.onclick = function () {
    selectedImageId = data.id;
  };
  
  return image;
}

formForGenerate.onsubmit = async function (e) {
  e.preventDefault();

  const firstField = formForGenerate.querySelector('[name="first-text"]');
  const secondField = formForGenerate.querySelector('[name="second-text"]');

  const firstValue = firstField.value;
  const secondValue = secondField.value;

  const url = await memesService.create(firstValue, secondValue);
  renderCreatedMeme(url);
};


function renderCreatedMeme(path) {
  bodyForMeme.innerHTML = '';
  const image = document.createElement('img');
  image.src = path;
  image.alt = '';
  bodyForMeme.appendChild(image);
}
