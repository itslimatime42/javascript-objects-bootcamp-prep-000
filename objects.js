var playlist = new Object();
playlist['Slowdive'] = 'Alison'
playlist['My Bloody Valentine'] = 'Sometimes'
console.log(playlist);

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}
updatePlaylist(playlist, "beatles", "Norwegian Wood");

function removeFromPlaylist(oldplaylist, artist) {
  delete oldplaylist.artist;
  return oldplaylist
}