import { ErrorInfo, PureComponent } from "react";

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

class ErrorBoundary extends PureComponent<ErrorBoundaryProps> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    console.log("error getDerivedStateFromError", error.message);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("error", error);
    console.log("errorInfo", errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Deu erro!</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
