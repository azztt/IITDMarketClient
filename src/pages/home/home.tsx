import React from 'react';
import {
    IonContent,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonPage,
    IonFab,
    IonFabButton,
    IonIcon,
    IonToolbar,
    IonFabList,
    IonButtons,
    IonBackButton,
} from '@ionic/react';
import { add, createOutline } from 'ionicons/icons';
import './home.css';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
// import HeaderCard from '../../components/HeaderCard/HeaderCard';
import ItemList from '../../components/ItemList/ItemList';
// import CategoryCard from '../../components/CategoryCard/CategoryCard';

import SearchBar from '../../components/SearchBar/SearchBar';

import { Item } from '../../utils/types';

interface HomeProps {
    items: Item[];
}

class Home extends React.Component<RouteComponentProps & HomeProps> {
    // eslint-disable-next-line react/destructuring-assignment
    // eslint-disable-next-line react/state-in-constructor
    state = {
        category: 'all',
    };

    render() {
        const { items, history } = this.props;
        const { category } = this.state;
        return (
            <IonPage>
                <IonContent>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/" />
                        </IonButtons>
                        <SearchBar />
                    </IonToolbar>

                    {/* <HeaderCard {...this.props} /> */}
                    <IonToolbar style={{ marginBottom: '1em' }}>
                        <IonSegment
                            scrollable
                            onIonChange={(e) =>
                                this.setState({ category: e.detail.value })
                            }
                            color="primary"
                        >
                            <IonSegmentButton value="all">
                                <IonLabel>All</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="laptop">
                                <IonLabel>Laptops</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="mobile">
                                <IonLabel>Mobiles</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="bicycle">
                                <IonLabel>Bicycles</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="book">
                                <IonLabel>Books</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonToolbar>
                    <ItemList items={items} category={category} />
                    <IonFab vertical="bottom" horizontal="end" slot="fixed">
                        <IonFabButton>
                            <IonIcon icon={add} />
                        </IonFabButton>
                        <IonFabList side="start">
                            <IonFabButton
                                color="light"
                                onClick={() => history.push('/postad')}
                            >
                                <IonIcon
                                    class="ad"
                                    size="large"
                                    icon={createOutline}
                                />
                                {/* <IonLabel>Post an Ad</IonLabel> */}
                            </IonFabButton>
                        </IonFabList>
                    </IonFab>
                </IonContent>
            </IonPage>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        items: state.item.items,
    };
};

export default connect(mapStatetoProps)(Home);
