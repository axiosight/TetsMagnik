import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class CommentItem extends Component {

    constructor(props) {
        super(props);

        this.handleDeleteComment = this.handleDeleteComment.bind(this);
    }

    handleDeleteComment() {
        let url = `api/comment/deleteComment/${this.props.id}`;
        alert(url);
        let method = 'DELETE';
        // debugger;
        let response = fetch(url, {
            method: method,
            mode: 'cors'
        });
        if (response.ok) {
            window.location.replace("/Profile");
            alert("Delete!");
        }
        window.location.replace("/Profile");
        alert("Delete!")
    }


    render() {
        return (
            <Card className="mb-2" style={{ boxShadow: '5px 5px 10px #cccccc' }}>
                <Card.Header>
                    <p><b>{this.props.title}</b> commented by <code>{this.props.email}</code> at <em>{this.props.time}</em></p>
                </Card.Header>
                <Card.Body>
                    <p>{this.props.message}</p>
                </Card.Body>
                <div className="text-center">
                    <Button onClick={this.handleDeleteComment} className="m-2 col-4" variant="outline-danger" size="sm">Delete</Button>
                </div>
            </Card>
        );
    }
}

export class ProfileComments extends Component {
    render() {
        return (
            <tbody>
                {
                    this.props.dataComments.map(function (item) {
                        return <CommentItem key={item.iD_Comment} id={item.iD_Comment} email={item.accounEmail} title={item.title} message={item.content} time={item.commentTime} />
                    })
                }
            </tbody>
        );
    }
}