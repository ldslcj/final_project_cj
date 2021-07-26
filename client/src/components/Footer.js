import React from 'react'
import Card from 'react-bootstrap/Card'

const Footer = () => {
    return (
        <div>
            <Card bg="light" text="white" border="light" className="text-center p-3" style={{marginTop:'10rem', height: '15rem'}}>
                <blockquote className="blockquote mb-0 card-body">
                    <p>
                        <img src=""></img>
                    </p>      
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                            
Developed to resolve disputes in Armsers LOL League <cite title="Source Title">- agy</cite>
                        </small>
                    </footer>
                </blockquote>
            </Card>
        </div>)
}

export default Footer