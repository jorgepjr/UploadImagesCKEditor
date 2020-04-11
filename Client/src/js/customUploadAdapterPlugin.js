import UploadAdapter from './uploadAdapter';

export default  function CustomUploadAdapterPlugin( editor ) {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
        // Configure the URL to the upload script in your back-end here!
        return new UploadAdapter( loader );
    };
}


console.log('Pacote do CustomUploadAdapterPlugin carregado')
