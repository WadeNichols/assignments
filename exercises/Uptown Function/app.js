var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];


// function printSong (lyrics) {
    
//     return lyrics.join(' ');
// }
//     console.log(printSong(lyrics))


// 2
// function reverseLyrics(lyrics) {

//     return lyrics.slice().reverse().join(' ');
// }
//  console.log(reverseLyrics(lyrics))


// 3
// function everyOther(lyrics) {
//     var lyricString = " ";

//     for (var i = 0; i < lyrics.length; i++) {
//         if (!(i % 2)) {
//             lyricString += lyrics[i] + " ";
//         }
//     }   
//     return lyricString;
// }
// console.log(everyOther(lyrics))


// 4
function switchLyrics (lyrics) {
    var output = [];
    var counter = 0;
    for (var i = 0; i < lyrics.length; i++) {
        if (lyrics.length - 1 === i) {
            output.push(lyrics[i]);
        } else if (y === 0) {
            output.push(lyrics[i + 1]);
            y++;
        } else {
            output.push(lyrics[i - 1]);
            y--;
        }
    }
    return output.join (' ');
}
console.log(switchLyrics(lyrics))

// OR

function switchLyrics(lyrics) {
    var lyricString = "";
    for (var i = 1; i < lyrics.length; i += 2) {
        lyricString += lyrics[i] + " " + lyrics[i - 1] + " ";
    }
    return lyricString;
}
console.log(switchLyrics(lyrics))