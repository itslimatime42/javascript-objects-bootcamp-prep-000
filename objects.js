var playlist = { stones: "Cant You Hear Me Knockin" };
console.log(playlist);

function updatePlaylist(playlist, artistName, songTitle) {
  var newPlaylist = Object.assign({}, playlist, { [artistName]: songTitle });
  console.log(newPlaylist);
}
updatePlaylist(playlist, beatles, "Norwegian Wood");

function removeFromPlaylist(oldplaylist, artist) {
  delete oldplaylist.artist;
  return oldplaylist
}