window.addEventListener('DOMContentLoaded', event => {
    // M� JavaScript s? d?ng th? vi?n Simple-DataTables ?? qu?n l� d? li?u tr�n trang web
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});
