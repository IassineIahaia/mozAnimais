
type MenuOptions = '' | 'all' | 'dog' | 'cat'| 'fish';

export const menuObject = (activeMenu: MenuOptions)=>{
  let returnObject ={
    all: false,
    cat: false,
    dog: false,
    fish: false
  };

  if(activeMenu !== ''){
    returnObject[activeMenu] = true;
  }
  return returnObject;
}