import {IonButton, IonContent, IonHeader, IonPage, IonProgressBar, IonTitle, IonToolbar} from '@ionic/react';
import './Tab2.css';
import {Transition} from "react-transition-group";
import {Tab2Props} from "../App";
import {defaultStyle, fadeStyles} from "../transitions";

const Tab2: React.FC<Tab2Props> = (props) => {
    const duration = 150;

    const clearPoints = () => {
        props.setPoints(undefined);
    }

    const isEmpty = () => {
        if (props.points != null) {
            return Object.entries(props.points).length < 1
        }
        return true;
    }

    const sendRequest = () => {
        fetch('https://gws.gplates.org/reconstruct/reconstruct_points/?points=95,54,142,-33&time=140&model=SETON2012')
            .then(res => res.json())
            .then(data => {
                props.setPoints(data);
            });
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 2</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="small">Tab 2</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <div className="results">
                    <pre>
                        {isEmpty() ? '{}' : JSON.stringify(props.points, null, 4)}
                    </pre>
                </div>
                <IonButton class="submit-button"
                           disabled={props.loading || !isEmpty()}
                           expand="block"
                           onClick={sendRequest}>
                    <Transition in={props.loading} timeout={duration}>
                        {state => (
                            <IonProgressBar class="loading-bar"
                                            color="dark"
                                            hidden={!props.loading}
                                            style={{...defaultStyle(duration), ...fadeStyles.get(state)}}
                                            type="indeterminate"/>
                        )}
                    </Transition>
                    <Transition in={!props.loading} timeout={duration}>
                        {state => (
                            <span hidden={props.loading} style={{...defaultStyle(duration), ...fadeStyles.get(state)}}>
                                Send Request
                            </span>
                        )}
                    </Transition>
                </IonButton>
                <IonButton class="submit-button"
                           disabled={isEmpty()}
                           expand="block"
                           onClick={clearPoints}>
                    Clear
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
