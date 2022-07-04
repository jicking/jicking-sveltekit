<div class="page-root">
	<header>
		<div class="brand">jicking <span class="red">Dev</span></div>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer>© 2022 Brand</footer>
</div>

<style global lang="scss">
	$bgColor: black;
	$colorPrimary: #f34a53;
	$fontFamily: Segoe UI;
	.page-root {
		// font
		font-size: 18px;
		font-family: $fontFamily;
		// color
		color: white;
		background-color: $bgColor;
		// box
		min-height: 100vh;
		// position
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr auto;
		grid-template-areas:
			'header'
			'main'
			'footer';
	}
	header {
		font-weight: normal;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		nav ul {
			list-style-type: none;
			li {
				display: inline;
			}
			li a {
				padding: 0.4rem;
			}
		}
	}
	main {
		padding: 0;
	}
	footer {
		font-weight: thin;
		font-size: 0.8rem;
		color: white;
		background-color: $bgColor;
		padding: 1rem;
	}
	// utils
	.hero {
		font-weight: Bolder;
		color: white;
		background-color: $colorPrimary;
		padding: 0.2rem 0.6rem;
	}
	.content {
		padding: 1rem;
	}
	.btn {
		font-weight: bold;
		color: white;
		background-color: $colorPrimary;
		padding: 0.8rem;
		border: none;
	}
	.brand {
		font-weight: bold;
	}
	.red {
		color: #f34a53;
	}
</style>
