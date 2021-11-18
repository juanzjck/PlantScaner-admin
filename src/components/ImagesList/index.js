import React, { useState } from 'react'
import { 
    BsFillCloudArrowUpFill, BsXCircle, 
    BsFileEarmarkImage, BsCheckCircle 
} from 'react-icons/bs'
import { Button, InputFile } from '../../styles/inputs'
import { 
    Span, Images, ModalDiv,
    Tr, Th, Table, SpanLink
} from './styles'
import { connect } from 'react-redux'
import { GetImages } from '../../containers/GetImages'
import { ImageCard } from '../ImageCard/'
import Modal from '../Modal/'
import { AddImage } from '../../containers/AddImage'
import { DeleteImage } from '../../containers/DeleteImage'
import { ModalDelete } from '../ModalDelete/'
import { listContainers, uploadFile, listBlobs } from '../../utils/azure'

const ImagesList = ({ dispatch, showModalDelete, idPlant }) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [imageName, setImageName] = useState('')
    const [result, setResult] = useState('')
    const [selectedId, setSelectedId] = useState('')
    const [imageFile, setImageFile] = useState(null)
    const [imageUpload, setImageUpload] = useState(false)
    const [uploadError, setUploadError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleOnError = (error) => {
        console.log('PlantForm Error:', error)
    }

    const handleOnCompleted = (data) => {
        console.log('PlantForm Data:', data)
    }

    const saveImage = async addImage => {
        setLoading(true)

        const uploadedFile = await uploadFile(imageFile)

        if (uploadedFile.requestId) {
            setImageUpload(true)
            setLoading(false)
            addImage({
                variables: {
                    idPlant,
                    input: {
                        name: imageName,
                        url: uploadedFile.url
                    }
                }
            })
        } else setUploadError('Error al subir el archivo')

        // await listContainers()
        // await listBlobs()
    }

    const handleDelete = id => {
        dispatch({ type: 'SHOW_MODAL_DELETE', payload: true })
        setSelectedId(id)
    }

    const completeDelete = () => {
        dispatch({ type: 'SHOW_MODAL_DELETE', payload: false })
        dispatch({ type: 'SET_SUCCESS', payload: 'La imagen fue eliminada exitosamente' })
        dispatch({ type: 'SET_ERROR', payload: '' })
        setSelectedId(0)
    }

    const errorDelete = data => {
        dispatch({ type: 'SHOW_MODAL_DELETE', payload: false })
        dispatch({ type:'SET_SUCCESS', payload: '' })
        dispatch({ type:'SET_ERROR', payload: 'No se pudo eliminar la imagen. ' + data })
    }

    const handleTryToDelete = (deleteImage, refetch) => {
        console.log('PlantForm Delete')
        dispatch({ type: 'SHOW_MODAL_DELETE', payload: false })
        deleteImage({ variables: { id: selectedId, idPlant } })
        refetch()
    }

    const handleClose = () => {
        setModalOpen(false)
        setImageName('')
        setImageFile(null)
        setImageUpload(false)
        setUploadError('')
    }

    const uploadImage = async e => {
        const file = e.target.files[0]
        const reader = new FileReader()
        
        setImageFile(file)

        reader.onload = () => {
            setImageName(file.name)
            setResult(URL.createObjectURL(file))
        }
        reader.readAsDataURL(file)
    }

    const reuploadImage = () => {
        setImageFile(null)
        setImageName('')
        setUploadError('')
        setResult('')
    }

    const ModalBody = ({ addImage }) => {
        if (imageUpload) 
            return <>
                <BsCheckCircle size='100' color='#00ff00' /><br />
                <Span>Imagen subida correctamente</Span><br />
                <Button onClick={handleClose}><Span>OK</Span></Button>
            </>
        
        if (uploadError) 
            return <>
                <BsXCircle size='100' color='#ff0000' /><br />
                <Span>{uploadError}</Span><br />
                <Button onClick={reuploadImage}>
                    <Span>Volver a Subir</Span>
                </Button>
            </>
        
        return <>
            <BsFileEarmarkImage size='80' /><br />
            <SpanLink 
                onClick={() => window.open(result, '_blank')} 
                title="Ver Imagen"
            >
                {imageName || ''}
            </SpanLink>
            <InputFile type="file" onChange={uploadImage} />
            <Button 
                disabled={imageName === '' ? true : false}
                onClick={() => saveImage(addImage)}
            >
                {loading ? <Span>Subiendo imagen...</Span> : <Span>Guardar y Subir</Span>}
            </Button>
        </>
    }

    return <>
        <Images>
            <GetImages id={idPlant} onError={handleOnError} onCompleted={handleOnCompleted}>
                {({ data: images, refetch }) => {
                    if (images) {
                        return <>
                            <Modal 
                                modalIsOpen={modalOpen} 
                                handleClose={() => setModalOpen(false)}
                            >
                                <ModalDiv>
                                    <AddImage 
                                        idPlant={idPlant} 
                                        onError={error => console.log('AddImage Error:', error)}
                                        onCompleted={data => refetch()}
                                    >
                                        {addImage => <ModalBody addImage={addImage} />}
                                    </AddImage>
                                </ModalDiv>
                            </Modal>
                            <Button onClick={() => setModalOpen(true)}>
                                <Span>Subir imagen</Span>
                                <BsFillCloudArrowUpFill size="18" />
                            </Button>
                            <Table>
                                <thead>
                                    <Tr>
                                        <Th>ID</Th>
                                        <Th>Nombre</Th>
                                        <Th>Was Upload</Th>
                                        <Th>URL</Th>
                                        <Th>Acciones</Th>
                                    </Tr>
                                </thead>
                                <tbody>
                                    {images.getImageByPlantId.map(data => 
                                        <Tr key={data._id}>
                                            <ImageCard 
                                                data={data} 
                                                handleTryToDelete={() => handleDelete(data._id)} 
                                                refetch={refetch} 
                                            />
                                        </Tr>
                                    )}
                                </tbody>
                            </Table>
                            <DeleteImage onError={errorDelete} onCompleted={completeDelete}>
                                {deleteImage => {
                                        return (
                                            <ModalDelete 
                                                itemName="una imagen"
                                                remove={() => handleTryToDelete(deleteImage, refetch)}
                                                modalIsOpen={showModalDelete}
                                            />
                                        )
                                    }
                                }
                            </DeleteImage>
                        </>
                    } else return null
                }}
            </GetImages>
        </Images>
    </>
}

function mapStateToProps(state) {
    return {
        showModalDelete: state.modal.showModalDelete,
    }
}

export default connect(mapStateToProps)(ImagesList)
