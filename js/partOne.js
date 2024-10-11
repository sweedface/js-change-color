const container = document.querySelector(".container");
const button = document.querySelector(".button");

button.addEventListener('click'), function() 
{
    if (container.classList.contains('nombredelaclase')) {
    container.classList.remove('nombredelaclase');
} else {
    container.classList.add('nombredelaclase');
}};
