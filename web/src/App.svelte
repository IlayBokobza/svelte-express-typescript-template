<script>
	import {Router,Link,Route} from 'svelte-routing'
	import Home from './views/Home.svelte'
	import About from './views/About.svelte'

	const routes = [
		{
			path:'/',
			name:'Home',
			component:Home,
		},
		{
			path:'/about',
			name:'About',
			component:About,
		},
	]
</script>

<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
	  </nav>
	{#each routes as route}
		<Route path={route.path} component={route.component} />
	{/each}
</Router>