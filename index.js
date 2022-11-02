// Write your code here!
const removeMain = document.querySelector('#main')
removeMain.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'David is the champion';