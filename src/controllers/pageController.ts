import { Request, Response } from "express";
import {menuObject} from '../helpers/menuObjects';
import {Pet} from '../models/pet'

export const home = (req: Request, res: Response) => {
  let list = Pet.getAll();

  res.render('pages/page', {
    menu: menuObject('all'),
    banner : {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    }, 
    list
  });
};
export const cao = (req: Request, res: Response) => {
  let list = Pet.getFromType('dog')
  res.render('pages/page', {
    menu: menuObject('dog'),
    banner : {
      title: 'Todos os cachoros',
      background: 'banner_dog.jpg'
    },
    list
  });

};
export const peixe = (req: Request, res: Response) => {
  let list = Pet.getFromType('fish')
  res.render('pages/page', {
    menu: menuObject('fish'),
    banner : {
      title: 'Todos os Peixes',
      background: 'banner_fish.jpg'
    },
    list
  });
};
export const gato = (req: Request, res: Response) => {
  let list = Pet.getFromType('cat')
  res.render('pages/page', {
    menu: menuObject('cat'),
    banner : {
      title: 'Todos os gatos',
      background: 'banner_cat.jpg'
    },
    list
  });
};
