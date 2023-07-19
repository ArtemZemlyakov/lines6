const userText = prompt ('Введите текст').trim();
const wordFromText = prompt ('Введите слово из текста').trim();
const indexOfWord = userText.indexOf(`${wordFromText}`);
const string = userText.slice(`${indexOfWord}`);  
  

alert(string);