import React from "react";

export function GoogleSearchEngineMetaTag() {
  return (
    <meta
      name="google-site-verification"
      content="ZcOdjUi6TELxVdMxoqWlQX6m5WvqrKsQlWJORDoJrJw"
    />
  );
}

export function NaverSearchEngineMetaTag() {
  return (
    <meta
      name="naver-site-verification"
      content="0c335a67f7e16e4eca72a7ac70ff775d7341846d"
    />
  );
}

export const SearchEngineMetaTags = {
  GoogleSearchEngineMetaTag,
  NaverSearchEngineMetaTag,
};
