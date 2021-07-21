import React from 'react'
import { Card, Divider, Image } from 'semantic-ui-react'

const Cat = ({id, avatar, name}) => {
    return (
        <Card>
            <Image src = {avatar} />
            <Card.Content>
                <Divider />
                <Card.Header>
                    {name}
                </Card.Header>
            </Card.Content>
        </Card>
    )
}

export default Cat