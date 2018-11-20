import { ApplicationInterface, IAppConfig } from '@tne/express-app';

const config: IAppConfig = {
	appPath: __dirname,
	appName: 'Backend Base',
	routesFolder: './routes',
};

ApplicationInterface.construct(config);
