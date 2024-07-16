
function main() {
    const inputString = readLine();
    const separator = readLine();
    const replaceString = readLine();
    
    /* Write your code here */
    const wordList = inputString.split(separator);
    const modified = wordList.map(word => word.length >7 ? replaceString : word);
    
    const result = modified.join(" ");
    console.log(result);
    
    
  }
main();  