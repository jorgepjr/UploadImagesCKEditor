import ClassicEditor from '@ckeditor/ckeditor5-build-classic/build/ckeditor';
import CustomUploadAdapterPlugin from './customUploadAdapterPlugin';

ClassicEditor
    .create(document.querySelector('#editor'), {
        extraPlugins: [CustomUploadAdapterPlugin]
    })
    .then()
    .catch();

console.log('Pacote do ckeditor carregado')