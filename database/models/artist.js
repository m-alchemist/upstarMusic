// Todo: Create Artist Model
const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const AlbumSchema=require('./album');


const ArtistSchema=new Schema({
  name: String,
  age: Number,
  yearActive: String,
  image: String,
  genre: String,
  website: String,
  netWorth:Number,
  labelName: String,
  retired: Boolean,
  album: [AlbumSchema]
})
const Artist=mongoose.model(ArtistSchema, 'artist');
module.exports=Artist;
