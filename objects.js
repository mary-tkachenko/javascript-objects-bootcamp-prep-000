var playlist = {
  artistName: "Cocorosie",
  songTitle: "Lemonade"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName: songTitle]})
}
