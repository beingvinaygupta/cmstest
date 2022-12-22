import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
// `import { Button } from 'flowbite-react';`
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';


export default function CreatePage(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<><h2 className="text-lg font-semibold tracking-widest text-gray-800 uppercase">Create Page</h2></>}>
            <Head title="Pages" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <CKEditor
                            editor={ClassicEditor}
                            config={{
                                ckfinder: {
                                    // Upload the images to the server using the CKFinder QuickUpload command.
                                    uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json',
                                    openerMethod: 'popup'
                                }
                            }}
                            data="<p>Hello from CKEditor 5!</p>"
                            onReady={editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                console.log({ event, editor, data });
                            }}
                            onBlur={(event, editor) => {
                                console.log('Blur.', editor);
                            }}
                            onFocus={(event, editor) => {
                                console.log('Focus.', editor);
                            }}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
