var playlist = { stones: "Can't You Hear Me Knockin" };

function updatePlaylist(oldplaylist, artistName, songTitle) {
  return  Object.assign({}, oldplaylist, { [artistName]: songTitle });
}

function removeFromPlaylist(oldplaylist, artist) {
  delete oldplaylist.artist;
  return oldplaylist
}