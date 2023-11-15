import Swal from 'sweetalert2'

export default {
  methods: {
    flash(message) {
      return Swal.fire({
        title: message,
        text: 'You clicked the button!',
        icon: 'success'
      })
    },
  },
};
