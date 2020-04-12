import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor';
import CustomUploadAdapterPlugin from './customUploadAdapterPlugin';

DecoupledEditor
    .create(document.querySelector('#editor'), {
        extraPlugins: [CustomUploadAdapterPlugin]
    })
    .then(editor => {
        const toolbarContainer = document.querySelector('#toolbar-container');

        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
    })
    .catch(error => {
        console.error(error);
    });

console.log('Pacote do ckeditor carregado')