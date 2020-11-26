import React, { Component } from 'react'
import SHOP_DATA from '../../shopping-data';
import { CollectionPreview } from './collection-preview/CollectionPreview';
import './ShopPage.scss';
export class ShopPage extends Component {
    state = {
        collections: SHOP_DATA
    }
    render() {
        return (
            <div className="ShopPage">
            {
                this.state.collections.map(({id, ...otherProps}) => (
                    <CollectionPreview key={id} {...otherProps}/>
                ))
            }
            </div>
        )
    }
}

export default ShopPage
