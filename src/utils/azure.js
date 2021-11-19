import regeneratorRuntime from "regenerator-runtime";
import { BlobServiceClient } from '@azure/storage-blob'

const account = process.env.ACCOUNT
const containerName = process.env.CONTAINER_NAME
const sasToken = process.env.SAS_TOKEN

const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net/?${sasToken}`);

export const listContainers = async () => {
    let i = 1
    const containers = blobServiceClient.listContainers()
    for await (const container of containers) {
        console.log(`Container ${i++}: ${container.name}`)
    }
}

export const listBlobs = async () => {
    let i = 1
    const containerClient = blobServiceClient.getContainerClient(containerName)
    const blobs = containerClient.listBlobsFlat()
    for await (const blob of blobs) {
        console.log(`Blob ${i++}: ${blob.name}`);
    }
}

export const uploadFile = async (file) => {
    const containerClient = blobServiceClient.getContainerClient(containerName)
    const blockBlobClient = containerClient.getBlockBlobClient(file.name)
    const uploadBlobResponse = await blockBlobClient.uploadData(file)

    return { 
        requestId: uploadBlobResponse.requestId,
        url: `https://${account}.blob.core.windows.net/${containerName}/${file.name}` 
    }
}
