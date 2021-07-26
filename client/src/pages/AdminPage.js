import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Card, Image, Icon } from 'semantic-ui-react'
import ImageUploader from '../components/ImageUploader2'
import ImageUploader2 from '../components/ImageUploader2'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'

const AdminPage = () => {
    const { data, loading, error, setData } = useAxiosOnMount('/api/images')


    const backgroundSet = () => {
        console.log('test')
    }

    const deleteImage = async (id) => {
        try {
            await axios.delete(
                `/api/images/${id}`
            )
            filterImages(id)
        } catch (error) {
            console.log(error)
        }
    }

    const filterImages = (id) => {
        setData(data.filter((d) => d.id !== id))
    }

    const renderImage = () => {
        return data.map((i) => {
            return (
                <Card>
                    <Image src={i.url} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{i.original_filename}</Card.Header>
                        <Card.Description>Image format {i.format}</Card.Description>
                        <Link onClick={() => backgroundSet(i.url)}>
                            Use this background
                        </Link>
                        <Link onClick={() => deleteImage(i.id)} style={{float:"right"}}>
                            <Icon name="trash" />
                        </Link>
                    </Card.Content>
                </Card>
            )
        })
    }

    return (
        <Container fluid>
            <ImageUploader />
            <Card.Group>
                {renderImage()}
            </Card.Group>
        </Container>
    )
}

export default AdminPage