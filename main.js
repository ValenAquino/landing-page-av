import './src/styles/normalize.css';
import './src/styles/style.css';

import './src/styles/header.css';
import './src/styles/inicio.css';

import './src/styles/carrousel.css';
import './src/styles/servicios.css';
import './src/styles/proyectos.css';

import './src/styles/herramientas.css';
import './src/styles/contacto.css';

import './src/styles/waves.css';
import 'boxicons';

import { sendEmail } from './src/scripts/email';
import { getYear } from './src/scripts/utilities';

const form = document.getElementById("contact-form");

form.addEventListener("submit", sendEmail);
document.addEventListener('DOMContentLoaded', getYear);