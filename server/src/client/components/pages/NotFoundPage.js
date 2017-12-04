import React from 'react';

const NotFound = ({ staticContext = {} }) => {
  //  staticContext object which will be modifed when we go to a not found
  // staticContext = context of StaticRoutes
  staticContext.notFound = true;
  return (
    <div>
      <div> Κάτι πήγε στραβά με την συνταγή και το γλυκό δεν μας πέτυχε </div>
    </div>);
};

export default {
  component: NotFound,
};
