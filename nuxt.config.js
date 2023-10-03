const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
	router: {
		base: 'old-mospolynav-web'
	}
} : {}

export default {
	...routerBase
}