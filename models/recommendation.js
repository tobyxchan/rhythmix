const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = require('./user');


const lineAlbumSchema = new Schema({
  album: {},
  user: userSchema
}, {
  timestamps: true
})

const recommendationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lineAlbums: [lineRecommendationSchema]
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})

recommendationSchema.methods.addAlbumToList = async function (albumId) {
  const list = this;
  const lineAlbum = list.lineAlbums.find(lineAlbum => lineAlbum._id.equals(albumId));
  if (lineAlbum) {
    return;
  } else {
    const Album = mongoose.model('Album');
    const album = await Album.findById(albumId);
    list.lineAlbums.push({album});
  }
  return list.save();
}

module.exports = mongoose.model('Recommendation', recommendationSchema);