var playlist = new Object();
playlist['Slowdive'] = 'Alison'
playlist['My Bloody Valentine'] = 'Sometimes'
console.log(playlist);

function updatePlaylist(playlist, artistName, songTitle) {
  var newPlaylist = Object.assign({}, playlist, { 'Phil Ochs': "Here's to the State of Mississippi" });
  console.log(newPlaylist);
  return newPlaylist
}
updatePlaylist(playlist, "beatles", "Norwegian Wood");

function removeFromPlaylist(oldplaylist, artist) {
  delete oldplaylist.artist;
  return oldplaylist
}