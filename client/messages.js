module.exports = {
    wrongVoiceChannel: "You need to be in the same voice channel as RadioX to use this command!",
    noPerms: "You need the %command.permission% permission to use this command!",
    notPlaying: "There is nothing playing!",
    runningCommandFailed: "Running this command failed!",
    noPermsEmbed: "I cannot send embeds (Embed links).",
    bugTitle: "Found a bug with %client.user.username%?\nDM one of the core developers:",
    bugDescription: "%client.developers%\nOr join the support server: %client.config.supportGuild%",
    helpTitle: "%client.user.username% help:",
    helpDescription: "%commands% \n %client.config.prefix%help <command> to see more information about a command.",
    helpCommandTitle: "%client.config.prefix%%command.name% %command.usage%",
    helpCommandDescription: "%command.description% \n Command Alias: %command.alias%",
    inviteTitle: "Invite %client.user.username% to your Discord server!",
    listTitle: "Radio Stations",
    nowplayingTitle: "Now Playing",
    nowplayingDescription: "**%radio.station.name%** \n Owner: %radio.station.owner% \n %client.funcs.msToTime(completed, \"hh:mm:ss\")%",
    noVoiceChannel: "You need to be in a voice channel to play radio!",
    noQuery: "You need to use a number or search for a supported station!",
    noPermsConnect: "I cannot connect to your voice channel.",
    noPermsSpeak: "I cannot speak in your voice channel.",
    wrongStationNumber: "No such station!",
    tooShortSearch: "Station must be over 2 characters!",
    noSearchResults: "No stations found!",
    errorPlaying: "An error has occured while playing radio!",
    play: "Start playing: %radio.station.name%",
    stop: "Stopped playback!",
    currentVolume: "Current volume: **%radio.volume%**",
    maxVolume: "The max volume is `100`!",
    invalidVolume: "You need to enter a valid __number__.",
    negativeVolume: "The volume needs to be a positive number!",
    newVolume: "Volume is now: **%volume%**",
    statisticsTitle: "Statistics",
    maintenanceTitle: "Maintenance",
    maintenanceDescription: "This command is not ready to be used by anyone.",
    errorToGetPlaylist: "You can't use this bot because it has no playlist available. Check more information in our Discord support server %client.config.supportGuild% !"
};