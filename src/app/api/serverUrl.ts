type Server = {
    Production ?: boolean;
    Development ?: boolean;
}

export const serverUrl = (Server : Server):string=>{
    if (Server.Production){
        return 'https://chit-chatbot.up.railway.app';
    }
    return `http://localhost:8000`;
}
