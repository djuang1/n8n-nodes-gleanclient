import { IAuthenticateGeneric, ICredentialType, INodeProperties,ICredentialTestRequest } from 'n8n-workflow';

export class GleanClientApi implements ICredentialType {
	name = 'gleanClientApi';
	displayName = 'Glean Client API';
	// Uses the link to this tutorial as an example
	// Replace with your own docs links when building your own nodes
	documentationUrl =
		'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';
	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://support-lab-be.glean.com',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		}
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://app.glean.com',
			url: '/',
			method: 'GET',
		},
	};
}
