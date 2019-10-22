var username = '';

username = prompt('What is your name?');
console.log(username);

var wantsToFund = prompt('Do you want to fund my travels?');
console.log(wantsToFund);

if (wantsToFund === 'yes') {
document.write('<h3>Thank you for helping me provide content, ' + username + '!</h3>');
} else {
document.write('<h3>Thank you for visiting my site, ' + username + '!</h3>');
}

// inputs: place, description
// work:
// outputs: html article with place, placeholder img, and description

function createDestinationArticle(destination, description) {
    var destinationArticle = '<article>' +
        '<img src="PlaceholderImg.jpg">' +
        '<h3>' + destination + '</h3>' +
        '<p class="desc">' + description + '</p>' +
        '</article>';
    return destinationArticle;
}

var wantsToCreate = prompt('Hey there! Would you like to add your own destination recommendation?')

if (wantsToCreate === 'yes') {
    var enteredDestination = prompt('What is the name of your destination?');
    var enteredDescription = prompt('Enter a brief description');
    var newDestination = createDestinationArticle(enteredDestination, enteredDescription);
    document.write(newDestination);
}

// EXAMPLE OF FUNCTION
// function makeSandwich (meat, cheese, bread) {
    // var newSandwich = 'Here is your ' + meat + ' and ' + cheese + ' on ' + bread + ' sandwich!';
    // return newSandwich;
// }
// var mySandwich = makeSandwich('tempeh', 'daiya', 'sourdough');
// console.log(mySandwich);

// ANOTHER EXAMPLE
//cat html pseudocode:
// inputs (parameters): name, image, description
// work: insert name, image, description into the text.
// outputs (return values): an html article w/ name, image, description.

// function createCatArticle(name, image, description) {
//     var catArticle = '<article>' + 
//         '<h3>' + name + '</h3>' +
//         '<img src="' + image + '">' +
//         '<p>' + description + '</p>' +
//         '</article>';
//     return catArticle;
// }

// var wantsToAdd = prompt('Hey there! Do you want to add a cat?');
// if (wantsToAdd === 'yes') {
//     var catName = prompt('What is the name of the cat?');
//     var catImage = prompt('What is the name of the file containing the iamage?');
//     var catDescription = prompt('What is the description of the cat?');
//     var newCat = createCatArticle(catName, catImage, catDescription);
//     document.write(newCat);
// }