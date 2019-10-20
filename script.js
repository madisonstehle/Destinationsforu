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