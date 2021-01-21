import React, { Component } from 'react';
import Delivery from './delivery';
// import personsData from '../Data/persons.json';
import './deliveryInfo.css';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    deliveries: {
        width: 550,
        height: 594,
        marginLeft: 506,
        top: 113,
        background: 'white',
        position: 'absolute'
    },
    buttons: {
        marginLeft: 58,
        width: 86,
        height: 36,
    },
    info: {
        width: 514,
        height: 38,
        marginLeft: 24,
        marginBottom: 14,
    }
}

// const DeliveryInfo = (list) => {
//     const [persons, setPersons] = useState(list);

//     // const eachDelivery = (item, i) => {
//     //     <Delivery key={i} index={item.id}>
//     //         <div className='person-info' style={styles.info}>
//     //             <h4 style={{ width: 24 }}>{i + 1}</h4>
//     //             <h4 style={{ marginLeft: 13 }}>{item.date}</h4>
//     //             <h4>{item.name}</h4>
//     //             <h4>{item.city}</h4>
//     //             <span style={styles.buttons} className="buttons">
//     //                 <Fab aria-label="edit" style={{ width: 32, height: 32, background: '#ED4D47', color: '#FFFFFF' }} onClick={this.edit}>
//     //                     <EditIcon />
//     //                 </Fab>
//     //                 <Fab className="deleteButton" aria-label="edit" style={{ width: 32, height: 32, marginLeft: 13, background: '#ED4D47', color: '#FFFFFF' }} onClick={() => this.delete(item.id)}>
//     //                     <DeleteIcon />
//     //                 </Fab>
//     //             </span>
//     //         </div>
//     //     </Delivery>

//     // }
//     return (
//         // <div className='deliveries-info' style={styles.deliveries}>
//         //     {useEffect(() => {
//         //         persons.forEach(item => setPersons(prevState => ({...prevState, [item]: "" })));
//         //     }, [persons])}
//         // </div>
//         persons.map((anObjectMapped, index) => {
//             return (
//                 <p key={`${anObjectMapped.name}_{anObjectMapped.email}`}>
//                     {anObjectMapped.name} - {anObjectMapped.email}
//                 </p>
//             );
//         })
//     )
// }
class DeliveryInfo extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            deliveries : props.list
        }
        this.eachDelivery = this.eachDelivery.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
    }

    // componentDidMount() {
    //     this.state.deliveries.map(item => this.add({id: item.id, date: item.date, name: item.name, city: item.city}));
    // }

    update(newDelivery, i) {
        this.setState(prevState => ({
            deliveries: prevState.deliveries.map(
                delivery => delivery.id !== i ? delivery: {...delivery, delivery: newDelivery})
        }));
    }

    delete(id) {
        this.setState(prevState => ({
            deliveries: prevState.deliveries.filter(delivery => delivery.id !== id)
        }))
    }

    add({id = null, date = null, name = null, city = null}) {
        this.setState(prevState => ({
            deliveries: [
                ...prevState.deliveries, {
                    id: id !== null ? id:this.nextId(prevState.deliveries),
                    name: name,
                    date: date,
                    city: city
                }
            ]
        }))
    }

    nextId(deliveries = []) {
        let max = deliveries.reduce
        ((prev, curr) => prev.id > curr.id ? prev.id: curr.id, 0)
        return ++max;
    }

    eachDelivery(item, i) {
        return(
            <Delivery key={i} index={item.id}>
                <div className='person-info' style={styles.info}>
                    <h4 style={{ width: 24}}>{i + 1}</h4>
                    <h4 style={{marginLeft: 13 }}>{item.date}</h4>
                    <h4>{item.name}</h4>
                    <h4>{item.city}</h4>
                    <span style={styles.buttons} className="buttons">
                        <Fab aria-label="edit" style={{width:32, height:32, background: '#ED4D47', color:'#FFFFFF'}} onClick={this.edit}>
                            <EditIcon />
                        </Fab>
                        <Fab className="deleteButton" aria-label="edit" style={{width:32, height:32, marginLeft: 13, background: '#ED4D47', color:'#FFFFFF'}} onClick={() => this.delete(item.id)}>
                            <DeleteIcon />
                        </Fab>
                    </span>
                </div>
            </Delivery>   
        )
    }
    render() {
        return(
            <div className='deliveries-info' style={styles.deliveries}>
                {this.state.deliveries.map(this.eachDelivery)}
            </div>
        )
    }
}

export default DeliveryInfo;