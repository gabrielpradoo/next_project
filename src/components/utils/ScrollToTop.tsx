import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

interface HistoryProps {
  history?: any;
}

const ScrollToTop: React.FC<HistoryProps> = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
};

export default withRouter(ScrollToTop);
