import React from 'react';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  const handleDismiss = (id) => {
    const newToastList = toastList;
    setToastList(newToastList.filter((toast) => toast.id !== id));
  }

  const createToast = ({ variant, message }) => {
    setToastList([...toastList, { id: crypto.randomUUID(), variant, message }]);
  }

  return <ToastContext.Provider value={{ toastList, handleDismiss, createToast }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
