import { Request, Response, NextFunction, Router } from "express";

export interface IControllerRoute {
  path: string;
  function: (req: Request, res: Response, next: NextFunction) => void;
  // method: "get" | "post" | "delete" | "put";
  method: keyof Pick<Router, "get" | "post" | "delete" | "put">;
}
