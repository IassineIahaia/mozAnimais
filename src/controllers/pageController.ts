import { Request, Response } from "express";
import {menuObject} from '../helpers/menuObjects';

export const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: menuObject('all'),
    banner : {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    }
  });
};
export const cao = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: menuObject('dog'),
    banner : {
      title: 'Todos os cachoros',
      background: 'banner_dog.jpg'
    }
  });
};
export const peixe = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: menuObject('fish'),
    banner : {
      title: 'Todos os Peixes',
      background: 'banner_fish.jpg'
    }
  });
};
export const gato = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: menuObject('cat'),
    banner : {
      title: 'Todos os gatos',
      background: 'banner_cat.jpg'
    }
  });
};
