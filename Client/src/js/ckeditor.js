import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor';
import CustomUploadAdapterPlugin from './customUploadAdapterPlugin';
import '../css/editor.css'

DecoupledEditor
    .create(document.querySelector('#editor'), {
        extraPlugins: [CustomUploadAdapterPlugin]
    })
    .then(editor => {
        const toolbarContainer = document.querySelector('#toolbar-container');

        editor.execute('link', 'http://example.com');
        editor.execute('link', 'http://example.com', { linkIsExternal: true });
        editor.execute('unlink');

            toolbarContainer.appendChild(editor.ui.view.toolbar.element);
        })
            .catch(error => {
                console.error(error);
            });

        console.log('Pacote do ckeditor carregado')