import axios from 'axios';
import qs from 'query-string';

const root = document.getElementById('root');
const formForFetch = document.getElementById('formForFetch');
const bodyForMemesList = document.getElementById('bodyForMemesList');
const formForGenerate = document.getElementById('formForGenerate');
const createdMeme = document.getElementById('createdMeme');

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
            username: "g_user_107257642549096835361",
            password: "1234",
            // text0: text0,
            text0,
            // text1: text1
            text1,
    };
        data = qs.stringify(data);
        const response = await axios.post('https://api.imgflip.com/caption_image', data);
        return response.data.data.url;
    }
};

async function createMemesLiwst(count) {
    bodyForMemesList.innerHTML = '';
    const list =  await memesService.get(count);

    list.forEach(item => {
        const image = createImage(item);
        bodyForMemesList.appendChild(image);
    });
}

formForFetch.onsubmit = function (e) {
    e.preventDefault();
    const input = formForFetch.querySelector('[name="count"]');
    const count = input.value;

    createMemesLiwst(count);
};

function createImage(data) {
    let image = document.createElement('img');
    image.src = data.url;
    image.alt = '';
    image.style.margin = '5px';
    image.style.height = '120px';
    image.onclick = function () {
        selectedImageId = data.id;
        image.style.border = '2px solid red';
    };

    return image
}

formForGenerate.onsubmit = async function (e) {
    e.preventDefault();
    const firstInput = formForGenerate.querySelector('[name="first-text"]').value;
    const secondInput = formForGenerate.querySelector('[name="second-text"]').value;
    memesService.create(firstInput, secondInput);
    const url = await memesService.create(firstInput, secondInput);
    renderCreatedMeme(url);
};

function renderCreatedMeme(path) {
    bodyForMemesList.innerHTML='';
    const image = document.createElement('img');
    image.src = path;
    image.alt = '';
    bodyForMemesList.appendChild(image);
}
