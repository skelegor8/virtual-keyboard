let section = document.createElement('section');
section.className = "text-area";
document.body.prepend(section);

let divContainer = document.createElement('div');
divContainer.className = "container";
section.prepend(divContainer);

let textarea = document.createElement('textarea');
textarea.className = "textarea";
divContainer.prepend(textarea);