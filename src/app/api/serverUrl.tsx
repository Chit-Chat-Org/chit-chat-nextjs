type Server = {
    Production ?: boolean;
    Development ?: boolean;
}

export const serverUrl = (Server : Server):string=>{
    if (Server.Production){
        return 'https://api.chit-chat.fun';
    }
    return `https://api.chit-chat.fun`;
}