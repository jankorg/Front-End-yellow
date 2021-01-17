import { Router } from 'express';
import {ServerClass} from "./server/index";

const apiRouter = Router();
const getContent = new ServerClass();

apiRouter.get('/getContent', getContent.getHeader);
apiRouter.get('/getMenu', getContent.getMenu);
apiRouter.get('/getFooter', getContent.getFooter);
apiRouter.get('/getFooter', getContent.getFooter);
apiRouter.get('/items', getContent.getSearchResults);
apiRouter.use('/items/:id', getContent.getDetailedResults);

export default apiRouter;