class Login {
    constructor() {
        this.help = {
            "description": "Login to Magister",
            "usage": "[prefix]login"
        }
        this.conf = {
            "disabled": false,
            "aliases": [],
            "perms": [],
            "guildOnly": false,
            "ownerOnly": false,
            "expectedArgs": false,
            "sameVC": false,
            "nsfw": false,
            "requires": []
        }
    }
    async run(Kirito, args, message, alias, prefix, chn) {
        if (Kirito.dev)
            message.respond("I have send a login link in your DMs!")
        const token = Kirito.newID(10);
        Kirito.loginTokens.set({user: message.author.id}, token)

        if (Kirito.dev)
            message.author.send(`Login: http://127.0.0.1:3000/${token}`)
        
        //Expire link after 5 minutes
        setTimeout(() => Kirito.loginTokens.delete(token), 300 * 1000)

    }
}

module.exports = Login;