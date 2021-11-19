new Vue({
  el: '#desafio',
  data: {
    idade: 25,
    nome: 'Filizzola',
    img: 'https://s3.envato.com/files/19341a8c-534d-41dc-be1e-c0769adcb9e4/inline_image_preview.jpg'
  },
  methods: {
    mutiply() {
      return this.idade * 3;
    },
    randomico() {
      return Math.random()
    },
    nameAlternative({ target }) {
      this.nome = target.value
    }
  }
})