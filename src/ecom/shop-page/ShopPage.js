import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { convertCollectionSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop-actions';
import CollectionsPage from '../collections/CollectionsPage';
import CollectionOverview from './collection-overview/CollectionOverview';
import './ShopPage.scss';
class ShopPage extends Component {
unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionMap);
    })
  }
  render() {
    return (
      <div className="ShopPage">
        <Route
          exact
          path={this.props.match.path}
          component={CollectionOverview}
        />
        <Route
          path={`${this.props.match.path}/:category`}
          component={CollectionsPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collection) =>
    dispatch(updateCollections(collection)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
