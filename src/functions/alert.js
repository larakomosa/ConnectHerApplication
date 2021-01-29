import Swal from 'sweetalert2';

const alert = (text) => {
  Swal.fire({
    title: 'Error!',
    text,
    confirmButtonText: 'Continue',
  });
};

export default alert;
