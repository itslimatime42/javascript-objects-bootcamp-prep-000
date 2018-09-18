var playlist = { stones: "Can't You Hear Me Knockin" };

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(oldplaylist, artist) {
  delete oldplaylist.artist;
  return oldplaylist
}