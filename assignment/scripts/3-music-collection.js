console.log('***** Music Collection *****')

// Required Features
// Create a variable collection that starts as an empty array.
let collection = [];
// Add the new object to the end of the collection array
// Take in the album's title, artist, yearPublished as input parameters
// Create a new object having the above properties
// Return the newly created object
// Test the addToCollection function:
// Add a function named addToCollection. This function should:
function addToCollection(title, artist, yearPublished){
  let newAlbum = {
    title : title,
    artist : artist,
    yearPublished: yearPublished,
  }
  //adding newAlbum to the collection array
collection.push(newAlbum);
// returning newAlbum
return newAlbum;

}

let album = addToCollection('shaqo', 'Sharma Boy', '2020')
console.log(album);
//console.log(collection)
// Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
let album1 = addToCollection('gabdhaha', 'Khadar Keyow', '2016')
let album2 = addToCollection('dhakac dhakac', 'Farhiya Kabayare', '2014')
let album3 = addToCollection('wadnaha', 'Farhiya Fiska', '2012')
let album4 = addToCollection('wuu cabsaday', 'Socdaal', '2021')
let album5 = addToCollection('Jaceyl', 'Samatar', '2000')

// Console.log each album as added using the returned value.
console.log(album1)
console.log(album2)
console.log(album3)
console.log(album4)
console.log(album5)


// After all are added, console.log the collection array.
console.log(collection);
// Add a function named showCollection. This function should:
// Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
// Console.log the number of items in the array.
// Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.
// Test the showCollection function.
function showCollection (array){
  for(let collect = 0; collect < collection.length; collect++){
    console.log(`${collection[collect].title} by ${collection[collect].artist}, published in ${collection[collect].yearPublished}`)
  }
}

showCollection(collection)
// Add a function named findByArtist. This function should:
// Take in artist (a string) parameter
// Create an array to hold any results, empty to start
// Loop through the collection and add any objects with a matching artist to the array.
// Return the array with the matching results. If no results are found, return an empty array.
// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

function findByArtist(artist){
  let arr = [];
  for (let art = 0; art < collection.length; art++ ){
    if(collection[art].artist === artist)
    arr.push(collection[art]);
  }
  return arr
}

console.log(findByArtist('Khadar Keyow'));

// When testing your functions, write all tests in the JavaScript file!
// Stretch goals
// Create a function called search. This function should:
// Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
// { artist: 'Ray Charles', year: 1957 }
// The returned output from search should meet these requirements:
// Return a new array of all items in the collection matching all of the search criteria.
// If no results are found, return an empty array.
// If there is no search object or an empty search object provided as input, then return all albums in the collection.
// Add an array of tracks to your album objects. Each track should have a name and duration. You will need to update the functions to support this new property:
//
// function search(artist, year, trackName){
//   let newArray = []
//   for(let item = 0; item < collection.length; item++){
//     if(collection[item].artist === searchs && collection[item].yearPublished === searchs)
//     newArray.push(collection)
//   }
//   return newArray
// }
//
// console.log(search('Ray Charles'))


// Update the addToCollection function to also take an input parameter for the array of tracks.
// Update search to allow a trackName search criteria.
// Update the showCollection function to display the list of tracks for each album with its name and duration.
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
