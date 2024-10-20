type PetType = 'dog' | 'cat' | 'fish' ;
type Pet = {
  type: PetType;
  image: string,
  name: string,
  color: string,
  sexo: 'Masculino' | 'Feminino';
}

const data: Pet[] = [
  {
    type: 'dog',
    name: 'Pastor-alemao',
    image: 'pastor-alemao.jpg',
    color: 'Amarelo e Preto',
    sexo: 'Masculino'
  },
  {
    type: 'dog',
    name: 'labrador',
    image: 'labrador.jpg',
    color: 'Amarelo e Preto',
    sexo: 'Masculino'
  },
  {
    type: 'dog',
    name: 'husky',
    image: 'husky.jpg',
    color: 'Amarelo e Preto',
    sexo: 'Masculino'
  },
  {
    type: 'dog',
    name: 'bulldog',
    image: 'bulldog.jpg',
    color: 'Amarelo e Preto',
    sexo: 'Masculino'
  },
  {
    type: 'cat',
    name: 'siames',
    image: 'siames.jpg',
    color: 'Branco',
    sexo: 'Feminino'
  },
  {
    type: 'cat',
    name: 'sphynx',
    image: 'sphynx.jpg',
    color: 'Vermelho',
    sexo: 'Feminino'
  },
  {
    type: 'cat',
    name: 'persa',
    image: 'persa.jpg',
    color: 'Branco',
    sexo: 'Feminino'
  },
  {
    type: 'fish',
    name: 'acara',
    image: 'acara.jpg',
    color: 'Preto',
    sexo: 'Feminino'
  },
  {
    type: 'fish',
    name: 'tanictis',
    image: 'tanictis.jpg',
    color: 'Vermelho',
    sexo: 'Masculino'
  },
  {
    type: 'fish',
    name: 'limpavidro',
    image: 'limpavidro.jpg',
    color: 'Preto',
    sexo: 'Masculino'
  },


]

export const Pet = {
    getAll: () : Pet[] => {
      return data;
    }, 
    getFromType: (type: PetType) : Pet[] => {
      return data.filter(item => item.type === type)
    },
    getFromName: (name: string) : Pet[]=> {
      return data.filter(item =>{
        if(item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1) {
          return true;
        }else{
          return false; 
        }
      });
    }
};