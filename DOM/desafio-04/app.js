new Vue({
	el: '#desafio',
	data: {
		alternarEstilo: false,
		cor: '',
		classCSS: 'c1',
		startClass: false,
		setClass: '',
		widthProgress: 200
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.alternarEstilo = !this.alternarEstilo
			}, 3000)
		},
		iniciarProgresso() {
			setInterval(() => {
				this.widthProgress = this.widthProgress += 1;
			}, 1000)
		}
	}
})
