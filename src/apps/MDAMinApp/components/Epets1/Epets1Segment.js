import React from 'react';
import {IonLabel, IonSegment, IonSegmentButton,} from "@ionic/react";
import {withRouter} from "react-router";


const Epets1Segment = (props) => {

    const getStatus = () => {
        if (props.location.pathname === '/mdamin/epets1'){
            return 'track'
        }
        else if (props.location.pathname === '/mdamin/epets1/completed'){
            return 'completed'
        }
        else if (props.location.pathname === '/mdamin/epets1/rejected'){
            return 'rejected'
        }
    }


    return (
        <IonSegment style={{marginTop:'1%'}} value={getStatus()}>
            <IonSegmentButton value="track" onClick={()=>{props.history.push('/mdamin/epets1')}}>
                <IonLabel>Track</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="completed" onClick={()=>{props.history.push('/mdamin/epets1/completed')}}>
                <IonLabel>Completed</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="rejected" onClick={()=>{props.history.push('/mdamin/epets1/rejected')}}>
                <IonLabel>Rejected</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    );
}

export default withRouter(Epets1Segment);