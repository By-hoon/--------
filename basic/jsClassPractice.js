class ObjectUtilities {
    constructor (){
    };
    static mergeObjects(objA, objB){
        return {...objA, ...objB};
    }
    static removePassword(user){
        const {name, favFood,  ...password } = user
        return {name, favFood};
    }
    static freezeObj(cleanUser){
        return Object.freeze(cleanUser);
    }
    static getOnlyValues(frozenUser){
        return Object.values(frozenUser)
    }
    static getOnlyProperties(frozenUser){
        return Object.keys(frozenUser)
    }
}
  
  const objA = {
    name: "Nicolas",
    favFood: "Kimchi"
  };
  
  const objB = {
    password: "12345"
  };
  
  const user = ObjectUtilities.mergeObjects(objA, objB);
  console.log(user);
  
  const cleanUser = ObjectUtilities.removePassword(user);
  console.log(cleanUser);
  
  const frozenUser = ObjectUtilities.freezeObj(cleanUser);
  
  const onlyValues = ObjectUtilities.getOnlyValues(frozenUser);
  console.log(onlyValues);
  
  const onlyProperties = ObjectUtilities.getOnlyProperties(frozenUser);
  console.log(onlyProperties);
  
  frozenUser.name = "Hello!"; // This should show an error
  