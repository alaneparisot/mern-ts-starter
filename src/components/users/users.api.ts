import express from 'express'
import { getMe } from './users.controller'
import { isAuthorized } from '../auth/auth.middleware'

const router = express.Router()

router.get('/me', isAuthorized, getMe)

export const userApi = router
