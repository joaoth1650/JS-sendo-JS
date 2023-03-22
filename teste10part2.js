let UNIX = Date.now()

console.log('UnixTimeStamp: ', UNIX)
console.log('Unix String (UTC): ', new Date(UNIX))

function Format(timestamp, lang) {

   let dateObj = new Date(timestamp)
   
   return dateObj.toLocaleString(lang, {
       year: 'numeric',
       month: '2-digit',
       day: '2-digit',
       hour: '2-digit',
       minute:'2-digit',
       second:'2-digit'
   }).replace(/\//g, '-')
   
}

console.log('formato pt-BR: ', Format(UNIX, 'pt-BR'))