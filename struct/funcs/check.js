module.exports = function (client, msg, command) {
    const radio = client.radio.get(msg.guild.id);
    const permissions = msg.channel.permissionsFor(msg.author);
    if (!radio || !radio.playing) return msg.channel.send('There is nothing playing!');
    if (msg.author.id !== client.config.devId) {
        if (msg.member.voice.channel !== radio.voiceChannel) return msg.channel.send(`You need to be in the same voice channel as RadioX to use this command!`);
        if (!permissions.has(command.permission)) {
            msg.channel.send(`You need the \`${command.permission}\` permission to use this command!`);
            return false;
        } else return true;
    } else return true;
};
