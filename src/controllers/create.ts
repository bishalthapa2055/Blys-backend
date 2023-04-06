import { Request, Response } from "express";
import { BadRequestError } from "../errors/bad-request-error";
import { Code } from "../model/code";

const createCode = async (req: Request, res: Response) => {
  try {
    let { code } = req.body;
    if (!code) {
      throw new BadRequestError("Code is required");
    }
    let length = code.toString().length;
    // console.log(length);
    if (length > 6) {
      throw new BadRequestError("Code length must be 6 digits");
    }

    if (!(length === 6)) {
      throw new BadRequestError("Code must be exact 6 lent");
    }
    if (code % 10 === 7) {
      throw new BadRequestError("Last digits Cannot be 7");
    }
    const createCode = await Code.build({
      code,
    }).save();
    if (!createCode) {
      throw new BadRequestError("Failed to create Code");
    }
    res
      .status(200)
      .json({ status: true, message: "Code created Sucessfully", code: code });
  } catch (e) {
    res.status(400).json({
      status: false,
      message: (e as any).message ? (e as any).message : "Unable to create",
    });
  }
};

export { createCode as createCodeHandler };
