// import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '../../../backend/router';
import { createNextApiHandler } from "@trpc/server/adapters/next";
import cors from "nextjs-cors";

// // export API handler
// export default trpcNext.createNextApiHandler({
//     router: appRouter,
//     createContext: () => null,
//   });

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  return createNextApiHandler({
    router: appRouter,
    createContext: () => null,
  })(req, res);
};

export default handler;