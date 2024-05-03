import { ReactNode } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
};

export default Layout;
