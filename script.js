/* JS - Only verion of Madlibs */
// Flowers speak in scentences. 

main();

function main() {
  /* Variables */
  var sentenceString = null, sentence=[], toReplace = 0, replaceIndex =0, replacement = null, replacements = [], newSentence = null; 

  authorSetup();
  playerPopulate();
  if(displayResult() == true){
    main();
  }
  alert("Thanks for playing!");

  /* Functions */

  /* authorSetup()
   * Author enters a sentence string. It is converted to an array. 
   * Author enters number of words to replace, then which, and replaces 
   * those words with their corresponding parts of speech.
   * 
   * @param none
   * @return none
   */  
  function authorSetup(){
    sentenceString = prompt("Input a sentence for a Madlib: ");
    sentence = sentenceString.split(" ");
    toReplace = prompt("How many words to replace?");
    for(i = 0; i < toReplace; i++){
      replaceIndex = prompt("Replace which word in sentence?");
      replaceIndex--;
      replacements[i] = replaceIndex;
      let partOfSpeech = prompt("What part of speech is "+sentence[replaceIndex]+"?");
      sentence[replaceIndex] = partOfSpeech;
    }
    alert("Author, go get Player");
    //alert(sentence);
  }

  /* ask player for replacement words
   * @param none
   * @return none
   */
  function playerPopulate(){
    for(let i=0; i<toReplace; i++){
      replacement = prompt("Enter a "+sentence[replacements[i]]);
      sentence[replacements[i]] = replacement;
    }
    //alert(sentence);
  }

  function displayResult(){
    newSentence = sentence.join(" ");
    let ready = confirm("Get Author, then press OK to see new sentence.");
    alert(newSentence);
    let again = confirm("Play again?");
    return again;
  }
}