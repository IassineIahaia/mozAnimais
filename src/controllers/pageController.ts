import {Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
  res.send("Home no controller")
}
export const cao = (req: Request, res: Response) => {
  res.send("cao")
}
export const peixe = (req: Request, res: Response) => {
  res.send("peixe")
}
export const gato = (req: Request, res: Response) => {
  res.send("Gato")
}