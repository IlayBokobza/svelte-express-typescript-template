<script lang="ts">
	export let name: string;

	async function onclick(){
		try{
			const res = await fetch('/api/hello')
			const text = await res.text()
			alert(text)
		}catch(e){
			console.warn(e)
		}
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button on:click={onclick}>Call Server</button>
</main>

<style lang="scss">
	$color: #ff3e00;
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: $color;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
