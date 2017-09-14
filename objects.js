var playlist = {
  artistName: "Cocorosie",
  songTitle: "Lemonade"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
