import ClassicEditor from '@ckeditor/ckeditor5-build-classic/build/ckeditor';

ClassicEditor
    .create(document.querySelector('#editor'))
    .then()
    .catch();

console.log('Pacote do ckeditor carregado')