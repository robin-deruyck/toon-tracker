import { WebtoonDaoFactory } from './dao/factory/WebtoonDaoFactory.ts'

export const Dao = WebtoonDaoFactory.createDao(import.meta.env.VITE_RUNTIME_ENV)
