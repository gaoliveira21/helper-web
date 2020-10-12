import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../contexts/auth';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = useAuth().signed;

  if (!signed && isPrivate) {
    return <Redirect to="/sign-in" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (<Component {...props} />)}
    />
  );
}
