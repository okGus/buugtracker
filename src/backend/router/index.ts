import * as trpc from '@trpc/server';
import { z } from 'zod';
import superjson from 'superjson'
import { prisma } from '../../db/client';

export const appRouter = trpc
  .router()
  .transformer(superjson)
  .query("get-posts", {
    async resolve() {
      return await prisma.users.findMany();
    }
  })
  .mutation("create", {
    input: z.object({
      email: z.string(),
      severity: z.string(),
      name: z.string(),
      desc: z.string(),
      type: z.string(),
    }),
    async resolve({ input }) {
      return await prisma.users.create({
        data: {
          email: input.email,
          severity: input.severity,
          name: input.name,
          desc: input.desc,
          type: input.type
        }
      })
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;