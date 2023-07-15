import { render} from './node_modules/lit-html/lit-html.js';
import {getAllStudents} from './api.js';
import {studentsTemplate} from './studentsT.js';
import { onSearch } from './search.js';

const tableBody = document.querySelector('.container tbody');
const studentsData = await getAllStudents();
const template = studentsTemplate(Object.values(studentsData));

render(template, tableBody);

document.getElementById('searchBtn').addEventListener('click', onSearch);


