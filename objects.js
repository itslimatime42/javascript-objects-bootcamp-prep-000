var playlist = { stones: "Can't You Hear Me Knockin'" };

function updatePlaylist(oldplaylist, artistName, songTitle) {
  var newPlaylist = Object.assign({}, oldplaylist, { [artistName]: songTitle });
  return newPlaylist
}

function removeFromPlaylist(oldplaylist, artist) {
  delete oldplaylist.artist;
  return oldplaylist
}