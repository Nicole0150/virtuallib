// import the Media class:
const Media = require('./Media');
// create your Music class:
class Music extends Media{
    constructor(title, year, genre, artist, length){
        super(title, year, genre);
        this.artist = artist;
        this.length = length;
    
    }
    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }
    static shortestAlbum([music1, music2]){
        if(music1.length > music2.length){
            return music2;
        } else if (music2.length > music1.length){
            return music1;
        }
    }
}
// don't change below
module.exports = Music;
