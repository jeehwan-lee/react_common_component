import {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import Alert from "../components/common/Alert";
import { createPortal } from "react-dom";

type AlertProps = ComponentProps<typeof Alert>;
type AlertOptions = Omit<AlertProps, "open">;

interface AlertContextValue {
  open: (options: AlertOptions) => void;
}

const Context = createContext<AlertContextValue | undefined>(undefined);

const defaultValue: AlertProps = {
  open: false,
  title: null,
  description: null,
  onButtonClick: () => {
    console.log("hello");
  },
};

export function AlertContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [alertState, setAlertState] = useState(defaultValue);
  const $portal_root = document.getElementById("root-portal");

  const close = useCallback(() => {
    setAlertState(defaultValue);
  }, []);

  const open = useCallback(
    ({ onButtonClick, ...options }: AlertOptions) => {
      setAlertState({
        ...options,
        open: true,
        onButtonClick: () => {
          close();
          onButtonClick();
        },
      });
    },
    [close]
  );

  const values = useMemo(() => ({ open }), [open]);

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root && createPortal(<Alert {...alertState} />, $portal_root)}
    </Context.Provider>
  );
}

export function useAlertContext() {
  const values = useContext(Context);

  if (values == null) {
    throw new Error("AlertContext 내부에서 사용해주세요");
  }

  return values;
}
