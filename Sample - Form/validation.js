Vue.use(window.vuelidate.default)


const { required, minLength, email, numeric } = window.validators

var app = new Vue({
  el: '#app',
  data: {
    name: "",
    tel: "",
    email: "",
    showName: "",
    showTel: "",
    showEmail: "",
  },

  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    tel: {
      required,
      numeric
    },
    email: {
      required,
      email
    }

  },

  methods: {
    replace: function () {
      this.showName = this.name.replace(),
        this.showTel = this.tel.replace(),
        this.showEmail = this.email.replace()
    },

    status(validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty
      }
    }
  }
})