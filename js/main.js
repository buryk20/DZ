

obj = {
    anonim: {say: 'Hello anonim'}, 
    user: {say: 'Hello user'}, 
    admin: {say: 'Hello admin'}
};


function greeting(who) {
    // var keyObj = obj.;
    
    // who.this;

    console.log(Object.values(who));
    // return who.say;
    
};

var alertGreeting = greeting.call(obj, anonim);

alert(alertGreeting);

