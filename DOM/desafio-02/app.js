new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert(){
            alert('Alert acionado');
        },
        getValue({ target }) {
            this.valor = target.value;
        }
    }
})