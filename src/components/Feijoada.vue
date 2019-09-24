<template lang="pug">
.hello
	h1(style="margin-top: 75px;") {{ msg }}
	h2.mb-4 Backpacking Webelos Vueing Materials
	h1.text-center(style="font-size: 85px; margin-top: 70px")
		| &#9805;
		| &#9774;
		| &#9748;
		| &#9879;
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			msg: 'Arroz e Feijão ao Gogo, com Porco'
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
	font-weight: normal;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
