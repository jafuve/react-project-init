import Swal from 'sweetalert2'

export function showLoader() {
    Swal.fire({
        title: 'Cargando...',
        text: 'Por favor espere...',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
}

export function hideLoader() {
    Swal.close();
}