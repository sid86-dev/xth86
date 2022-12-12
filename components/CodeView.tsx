import React, { FC } from "react";

interface ViewProps {
  srcDoc: string;
}

const CodeView: FC<ViewProps> = ({ srcDoc }) => {
  return (
    <iframe
      srcDoc={srcDoc}
      sandbox="allow-scripts allow-same-origin"
      frameBorder="0"
      width="100%"
      height="100%"
    />
  );
};

export default CodeView;
