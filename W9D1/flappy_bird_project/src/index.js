import FlappyBird from './game';

const canvas = document.getElementById('bird-game');
let ctx = canvas.getContext("2d");

new FlappyBird(canvas);