import swal from 'sweetalert2';

export function useFlash() {
  function flash(title, message, icon) {
    return swal.fire({
      title: title,
      text: message,
      icon: icon,
    });
  }

  return { flash };
}
