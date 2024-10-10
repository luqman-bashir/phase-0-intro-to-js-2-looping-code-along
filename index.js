// Code your solutions in this file
function writeCards(names, occasion) {  
    const messages = [];   
    for (let i = 0; i < names.length; i++) {  
    
      messages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);  
    }  
    return messages; 
  }
  const result = writeCards(["Charlie", "Samip", "Ali"], "birthday");  
console.log(result);
 

function countDown(start) {  
    while (start >= 0) {  
      console.log(start);  
      start--;  
    }  
  }  
  
   
  countDown(5);