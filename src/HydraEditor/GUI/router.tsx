import React, {
  ReactNode,
  useState,
  useEffect,
  useContext,
  createContext,
  MouseEvent,
} from "react";

interface RouterContextType {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

interface RouterProps {
  children: ReactNode;
}

export function Router({ children }: RouterProps) {
  const [path, setPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (to: string) => {
    if (to !== path) {
      window.history.pushState({}, "", to);
      setPath(to);
    }
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

interface RouteProps {
  path: string;
  children: ReactNode;
}

export function Route({ path, children }: RouteProps) {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("Route must be used within a Router");
  }
  const { path: currentPath } = context;
  return currentPath === path ? <>{children}</> : null;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
}

export function Link({ to, children, ...props }: LinkProps) {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("Link must be used within a Router");
  }
  const { navigate } = context;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

export function useRouter(): RouterContextType {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a Router");
  }
  return context;
}
