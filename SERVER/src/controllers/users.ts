import { Request, Response } from "express";
import { db } from "../db.js";

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await db.manyOrNone(
      `SELECT *
        FROM users`
    );

    if (!users) {
      res.status(404).json({ msg: "Users not found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.error("No users");
    res.status(500).json({ msg: "Something went wrong" });
  }
}
