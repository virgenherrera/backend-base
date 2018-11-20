import { expressRouter, endpoint, IRequest, IResponse } from '@tne/express-app';

@expressRouter
export default class Router1 {
	@endpoint({
		method: 'get',
		path: '/route1'
	})
	public async getSome(req: IRequest, res: IResponse) {
		const args = req.mapReqToObj(['body', 'query', 'params']);

		try {
			return res.successJson('get', args);
		} catch (E) {
			return res.errorJson(E);
		}
	}
}
