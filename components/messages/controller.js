const store = require('./store');

function addMesage(user, message){
   /*  console.log(user);
    console.log(message); */
    return new Promise((resolve, reject) =>  {
        if (!user || !message)
        {
            console.error('[messageController] No hay usuario o un mensaje');
            return reject('Los datos son incorrectos');
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        };
        
        store.add(fullMessage);
        resolve(fullMessage);
    });
}

function getMessages() {
    return new Promise((resolve, reject) =>{
        resolve(store.list());
    })
}

module.exports = {
    addMesage,
    getMessages,
};