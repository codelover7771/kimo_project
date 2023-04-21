import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto py-10 text-center">
      <h1 className="text-4xl font-bold mb-4">404 Page Not Found</h1>
      <p className="text-lg mb-8">The requested page could not be found.</p>
      <img
        src="/images/404.png"
        alt="404 error"
        className="mx-auto max-w-sm"
      />
    </div>
  );
};

export default NotFoundPage;

