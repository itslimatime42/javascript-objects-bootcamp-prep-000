var playlist = { stones: "Can't You Hear Me Knockin'" };

function updatePlaylist(oldplaylist, artist, song) {
  newPlaylist = Object.assign({}, oldplaylist, { artist: song });
  return newPlaylist
}

function removeFromPlaylist(oldplaylist, artist) {
  delete oldplaylist.artist;
  return oldplaylist
}