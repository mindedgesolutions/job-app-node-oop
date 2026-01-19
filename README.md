Flow: Controller -> Service -> Repository

Controller - Returns json
Service - Handles business logics
Repository - Handles database logics

---

pino + pino-pretty : for logging error / warning / data inside globals > logs > logger.ts

---

npx prisma migrate dev (to migrate)
npx prisma generate (to make models available in queries)
npx prisma db seed (for seeding DB)
add: seed: 'ts-node prisma/seed.ts' in prisma.config.ts
migrations: {
path: 'prisma/migrations',
seed: 'ts-node prisma/seed.ts',
},
