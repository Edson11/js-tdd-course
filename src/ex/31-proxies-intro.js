let obj = {
  name: 'Willian',
  age:26
}

let proxy = new Proxy(obj, {
    get(target, name) {
      console.log('Alguem esta pedindo o nome');
      return target[name];
    },
  
    set(target, name, value) {
      console.log('Alguem esta alterando o nome');
      target[name] = value;
    }
  
});