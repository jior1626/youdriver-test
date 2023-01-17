/*
https://docs.nestjs.com/middleware#middleware
*/

import { Injectable, NestMiddleware } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions/unauthorized.exception';
import { Request, Response } from 'express';

@Injectable()
export class WompiMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: Function) {
		try {
			const authHeaders = req.headers.authorization;

			if (authHeaders && (authHeaders as string).split(' ')[1]) {
				const token = (authHeaders as string).split(' ')[1];
				// const decoded: any = decodeToken(token);	
				// if (allowedUsers.includes(decoded.user.userType)) {
					// req. = decoded.user;
					next();
				// }
				// else {
				// 	throw new Error("Invalid User");
				// }
			} else {
				throw new Error("Missing auth token");
			}
		} catch (error) {
			throw new UnauthorizedException('unauthorized', error.message);
		}

	}
}
