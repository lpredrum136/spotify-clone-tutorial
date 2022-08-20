import { User } from 'next-auth'
import { JWT } from 'next-auth/jwt'

export enum TokenError {
	RefreshAccessTokenError = 'RefreshAccessTokenError'
}

export interface ExtendedToken extends JWT {
	accessToken: string
	refreshToken: string
	accessTokenExpiresAt: number
	user: User
	error?: TokenError
}
