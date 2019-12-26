import React, { Component } from 'react';
import { Table, Button, Image } from 'react-bootstrap';
import logo from '../StaticFiles/pet.png';

class Item extends Component {

    constructor(props) {
        super(props);

        this.handleDeletePet = this.handleDeletePet.bind(this);
    }

    handleDeletePet() {
        let url = `api/pet/deletePet/${this.props.id}`;
        // alert(url);
        let method = 'DELETE';
        // debugger;
        let response = fetch(url, {
            method: method,
            mode: 'cors'
        });
        if(response.ok){
            window.location.replace("/Profile");
            alert("Delete!");
        }
        window.location.replace("/Profile");
        alert("Delete!")
        // let url = "api/pet/deletePet";
        // // alert(url);
        // let method = 'DELETE';
        // alert(`${this.props.id}`);
        // debugger;
        // let response = fetch(url, {
        //     method: method,
        //     mode: 'cors',
        //     headers: {'content-type': 'application/json'},
        //     body: JSON.stringify({id: `${this.props.id}`})
        // });

        // if (response.ok) {
        //     window.location.replace("/Profile");
        //     alert("Deleted!");
        // } else {
        //     alert("Not Valid Data!");
        // }
    }

    render() {
        return (
            <tr>
                <td className="text-center">
                    <Image style={{ width: '81px', height: '81px', boxShadow: '5px 5px 10px #cccccc' }} src={logo} alt="Logo" roundedCircle />
                </td>
                <td className="text-center">{this.props.name}</td>
                <td className="text-center">{this.props.age}</td>
                <td className="text-center">{this.props.weight}</td>
                <td className="text-center">Boy</td>
                <td className="text-center">
                    <Button onClick={this.handleDeletePet} className="m-2" style={{ boxShadow: '5px 5px 10px #cccccc' }} variant="outline-danger" size="sm">Delete</Button>
                </td>
            </tr>
        );
    }
}

export class PetsTable extends Component {
    render() {
        return (
            <Table striped bordered hover responsive className="mt-2">
                <thead>
                    <tr className="text-center">
                        <th className="text-center">Img</th>
                        <th className="text-center">Pet Name</th>
                        <th className="text-center">Age</th>
                        <th className="text-center">Weight</th>
                        <th className="text-center">Sex</th>
                        <th className="text-center"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map(function (item) {
                            return <Item key={item.iD_Pet} id={item.iD_Pet} name={item.petName} age={item.petAge} weight={item.petWeight} />
                        })
                    }
                </tbody>
            </Table>
        );
    }
}