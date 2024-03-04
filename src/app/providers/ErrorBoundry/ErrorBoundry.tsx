import { Component, ErrorInfo, ReactNode, Suspense } from "react";
import { PageLoader } from "shared/ui/PageLoader/PageLoader";
import { PageError } from "widgets/ui/ErrorPage/ErrorPage";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundatyState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundatyState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info.componentStack);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
    }
    return children;
  }
}

export default ErrorBoundary;
