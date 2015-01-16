// Configuration for localhost testing.
var localhost_config = {
  server_url: "http://localhost.rotq.net:8888/",
  hunt_id: "localtest",
  gapi_client_id: "512221203013-mvqk2tlntb8kpi7kbepimevo9j3bve5s.apps.googleusercontent.com",
  doc_folder_id: "0Bz6L5l-UBC8bZFNKbkVrVTJrXzA",
  doc_clonefrom_id: "18ray8WUVPrkuw0iCWxjhBuaY2y6-YS5awfIvMP7VN3k",
  jobs_to_display: ["Puzzle Czar", "Comm Czar"],
  hunt_url: "http://en.wikipedia.org/wiki/Puzzlehunt",
  hunt_info: "no login necessary",
  team_url: "http://en.wikipedia.org/wiki/Team",

  chat_domain: "localhost.rotq.net:5000",
  chat_js: "static/loadstub.js",
  chat_cachebuster: "37",
};

// Configuration for Team Rage, MIT Mystery Hunt 2015.
var rage15_config = {
  server_url: "http://rotq.net:8888/",
  hunt_id: "mh2015_rage",
  gapi_client_id: "512221203013-mvqk2tlntb8kpi7kbepimevo9j3bve5s.apps.googleusercontent.com",
  doc_folder_id: "0Bz6L5l-UBC8bNFE0LWJhYldnNWs",
  doc_clonefrom_id: "18ray8WUVPrkuw0iCWxjhBuaY2y6-YS5awfIvMP7VN3k",
  jobs_to_display: ["Puzzle Czar", "Comm Czar"],
  hunt_url: "http://example.com/",
  hunt_info: "user:rage pass:ireproof",
  team_url: "http://rotq.net/",

  chat_domain: "x.rotq.net",
  chat_js: "static/loadstub.js",
  chat_cachebuster: "1",
};

// Modify this to use a different config.
var config = localhost_config
