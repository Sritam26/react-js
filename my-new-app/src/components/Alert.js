import React from 'react';

export default function Alert(props) {
  const{alert}=props

  // Check if alert is null or undefined
  if (!alert) {
    return null; // or return a placeholder or an empty <div>
  }

  return (
    <div>
      {/* Ensure props.alert exists before accessing its properties */}
      {alert && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          <strong>{alert.type}</strong>: {alert.msg}
        </div>
      )}
    </div>
  );
}
