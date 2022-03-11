import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonLoading, IonButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import {axios} from '../components/AxiosAdopter';
import qs from 'qs';
import React from 'react';

type vars = { responseStr: string, type: string, coordinates: any, showLoading: boolean }
export default class Tab2 extends React.Component<{}, vars> {
  constructor(props: any) {
    super(props);
    this.state = {
      responseStr: '',
      type: '',
      coordinates: '',
      showLoading: false
    };
  }

  onClickBotton = () => {
    this.setState({showLoading: true})
    axios.get('https://gws.gplates.org/reconstruct/reconstruct_points/?points=95,54,142,-33&time=140&model=SETON2012')
    .then((response: any) => {
      console.log('response')
      console.log(response.data.coordinates[0])
      this.setState({
        responseStr:qs.stringify(response.data),
        type: response.data.type,
        coordinates: response.data.coordinates,
        showLoading: false
      })
    })
    .catch( (error: any) => {
      console.log('error')
      console.log(error)
      this.setState({showLoading: false})
    })
    
    

  };

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonLoading
            isOpen={this.state.showLoading}
            message={'Please wait...'}
          />
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large" class="ios title-large hydrated">Tab 2</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div style={{
            display: "flex", flexDirection: "column", margin: '0 50px 0 50px', justifyContent: 'center', height: "200px"
          }}>
            <IonButton 
              color="primary" onClick={this.onClickBotton}
            >
              This is new button
            </IonButton>
          </div>
          <div style={{margin: '10px 50px 0 50px'}}>
            <div>{this.state.responseStr}</div>
            <div style={{marginTop: '10px'}}>{this.state.type == '' ? '' : 'formatted version:'}</div>
            <div>{this.state.type == '' ? '' : 'type = '}{this.state.type}</div>
            <div>{this.state.type == '' ? '' : 'coordinates[0] = '}{Array(this.state.coordinates[0]).toString()}</div>
            <div>{this.state.type == '' ? '' : 'coordinates[1] = '}{Array(this.state.coordinates[1]).toString()}</div>
          </div>
        </IonContent>
      </IonPage>
    );
  }
}

// export default Tab2;
