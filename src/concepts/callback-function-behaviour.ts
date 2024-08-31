
function getSuffix(str: string | null) {
  return str
}

let suffix = getSuffix('vikram');
if (suffix) {
  const suffixTemp = suffix; // need to store the value in a const variable to inform typescript that it will be a string even if used in a callback function
  console.log('>> suffix.toupperCase(): ', suffix.toUpperCase());

  // callback called in forEach
  ['hi', 'hello'].forEach((item) => {
    console.log('>> item: ', item + suffixTemp.toUpperCase()); // suffix could be null as typescript will discard all the earlier checks if a callback function is involved
  })

  // callback called in setTimeout
  setTimeout(() => {
    console.log('>> suffixTemp: ', suffixTemp.toUpperCase());
  }, 1000);

}