var playlist = { 
  "Slowdive": "Alison", 
  My Bloody Valentine: "Sometimes"
};
console.log(playlist);

function updatePlaylist(playlist, artistName, songTitle) {
  var newPlaylist = Object.assign({}, playlist, { [artistName]: songTitle });
  console.log(newPlaylist);
  return newPlaylist
}
updatePlaylist(playlist, "beatles", "Norwegian Wood");

function removeFromPlaylist(oldplaylist, artist) {
  delete oldplaylist.artist;
  return oldplaylist
}