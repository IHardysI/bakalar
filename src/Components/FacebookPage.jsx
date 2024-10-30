import React, { useEffect } from 'react';

const FacebookPage = ({ pageUrl, width = 800, height = 400 }) => {
  useEffect(() => {
    // Check if the Facebook SDK script is already added to avoid duplicates
    if (!window.FB) {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0';
      script.onload = () => {
        // Trigger Facebook SDK parsing once the script is loaded
        if (window.FB) {
          window.FB.XFBML.parse();
        }
      };
      document.body.appendChild(script);
    } else {
      // Re-parse if the Facebook SDK is already loaded
      window.FB.XFBML.parse();
    }
  }, [pageUrl]); // Re-run only if pageUrl changes

  return (
    <div
      className="fb-page"
      data-href={pageUrl}
      data-tabs="timeline"
      data-width={width}
      data-height={height}
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    ></div>
  );
};

export default FacebookPage;