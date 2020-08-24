
import React from 'react';

const FeatureSliderItem = ({featureName, featureImage})  => (
    <div className="features-slider_item">
        <div className="features-img"  style={{ backgroundImage:`url(${featureImage})`}}></div>
        <div className="features-feature">{featureName}</div>
    </div>
);

export default FeatureSliderItem;


                
                