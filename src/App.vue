<template lang="pug">
#app
	.page-container.md-layout-column
		md-toolbar.md-warning
			md-button.i.material-icons-button(@click='showNavigation = true' style="margin-left: -10px;")
				i.material-icons menu

			span.md-title
				i.fa.fa-gears.fa-2x
				| &nbsp; Engenho Novo LLC

			.md-toolbar-section-end
				md-button.md-small-hide(@click='showSidepanel = true')
					i.material-icons settings_input_antenna
					| &nbsp; From the Bar

		md-drawer(:md-active.sync='showNavigation')
			md-toolbar.md-transparent(md-elevation='4', style="background-color: #607D8B;")
				span.md-title(style="color: white;")
					i.material-icons.separate restaurant
					| &nbsp; O Cardápio

			md-list(@click="showNavigation = false", style="color: black")
				md-list-item(to='/')
					i.material-icons.separate settings_input_antenna

					span.md-list-item-text Junk Food

				md-list-item(to='/salads')
					i.material-icons.separate local_dining

					span.md-list-item-text Huge Salads

				md-list-item(to='/smoothies')
					i.material-icons.separate local_bar

					span.md-list-item-text Liquid Diet

				md-list-item(to='/churrrasco')
					i.material-icons.separate commute

					span.md-list-item-text Picanha to Gogo

				md-list-item(to='/luau')
					i.material-icons.separate restaurant

					span.md-list-item-text Hawaiian Piglet

				md-list-item(to='/barbacoa')
					i.material-icons.separate pets

					span.md-list-item-text Mexican Goat

				md-list-item(to='/tailgate')
					i.material-icons.separate motorcycle

					span.md-list-item-text Tailgate X-Burgers

				md-list-item(to='/chili')
					i.material-icons.separate translate

					span.md-list-item-text Chili Cookoffs

				md-list-item(to='/feijoada')
					i.material-icons.separate restaurant

					span.md-list-item-text Brazuco Bean Feast

				md-list-item(to='/philly')
					i.material-icons.separate directions_transit

					span.md-list-item-text Food Truck Philly Cheese

		md-drawer.md-right(:md-active.sync='showSidepanel')
			md-toolbar.md-transparent(md-elevation='0', style="background-color: #607D8B;")
				span.md-title(style='color: white;')
					i.material-icons local_bar
					| &nbsp; Booze & Snooze

			md-list(@click="showSidepanel = false")
				md-list-item(to="/beer")
					span.md-list-item-text Cheap Swill

					md-button.i.material-icons-button.md-list-action
						i.material-icons.right-icon-separate my_location

				md-list-item(to='/margaritaville')
					span.md-list-item-text Margarita

					md-button
						i.material-icons-button.md-list-action
							i.material-icons.right-icon-separate all_inclusive

				md-list-item(to='/cubism')
					span.md-list-item-text Cuba Libre

					md-button.i.material-icons-button.md-list-action
						i.material-icons.right-icon-separate beach_access

				md-list-item(to='/pining-apples')
					span.md-list-item-text Piña Colada

					md-button.i.material-icons-button.md-list-action
						i.material-icons.right-icon-separate local_drink

				md-list-item(to='/country-girl')
					span.md-list-item-text Caipirinha

					md-button.i.material-icons-button.md-list-action
						i.material-icons.right-icon-separate local_bar

		md-content
			router-view
			img(src='@/assets/alchemy-sulphuric.svg' width="125px" style="margin-top: 88px")
			//- h2 An Homage to Led Zeppelin
</template>

<script>
	export default {
		name: 'Temporary',
		data: () => ({
			showNavigation: false,
			showSidepanel: false
		})
	}
</script>
<style>

#app {
	font-family: 'News Cycle', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.md-drawer {
	width: 300px;
}

.separate {
	margin-right: 30px;
}

.right-icon-separate {
	margin-left: 20px;
}

.page-container {
	min-height: 100vh;
}

</style>
