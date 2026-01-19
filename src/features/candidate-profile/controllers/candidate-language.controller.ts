import { Request, Response } from 'express';
import { candidateLanguageService } from '../services/candidate-language.service';
import { StatusCodes } from 'http-status-codes';

class CandidateLanguageController {
  public async create(req: Request, res: Response) {
    const data = await candidateLanguageService.create(
      req.body,
      req.currentUser
    );

    return res
      .status(StatusCodes.CREATED)
      .json({ message: 'Created successfully', data });
  }

  // ----------------------------------------------

  public async readMyLanguages(req: Request, res: Response) {
    const data = await candidateLanguageService.readMyLanguages(
      req.currentUser
    );

    return res.status(StatusCodes.OK).json({ data });
  }

  // ----------------------------------------------

  public async readAll(req: Request, res: Response) {
    const data = await candidateLanguageService.readAll();

    return res.status(StatusCodes.OK).json({ data });
  }

  // ----------------------------------------------

  public async updateLevel(req: Request, res: Response) {
    const { languageName } = req.params;
    const data = await candidateLanguageService.updateLevel(
      req.body.level,
      languageName as string,
      req.currentUser
    );

    return res
      .status(StatusCodes.OK)
      .json({ message: 'Updated successfully', data });
  }

  // ----------------------------------------------

  public async delete(req: Request, res: Response) {
    const { currentUser } = req;
    const { languageName } = req.params;
    console.log(languageName);

    await candidateLanguageService.delete(languageName as string, currentUser);

    return res.status(StatusCodes.OK).json({ message: 'Deleted successfully' });
  }
}
export const candidateLanguageController: CandidateLanguageController =
  new CandidateLanguageController();
