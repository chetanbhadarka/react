import { toast } from "react-toastify";

const toastConfiguration = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const successToast = (message) => {
  toast.success(message, toastConfiguration);
};

export const errorToast = (message) => {
  toast.error(message, toastConfiguration);
};
