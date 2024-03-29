import { isDevMode } from "@/constants/env.constant";
import Script from "next/script";
import React from "react";

function MonitoringInitializer() {
  const GA_TRACKING_ID = "G-HZ44H7LSZJ";

  return (
    <>
      {/* google analytics */}
      {!isDevMode && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
    </>
  );
}

export default MonitoringInitializer;
