import { Request, Response } from "express";

export default async function index(req: Request, res: Response) {
    return res.status(200).json({ message: "Estou rodando" })
}