import React from 'react';
import Navigation from './Navigation';
import PetDetails from './PetDetails';

const PetDetailPage = props =>
    <React.Fragment>
        <Navigation />
        <PetDetails pet={props.pet} />
    </React.Fragment>
    ;

export default PetDetailPage;