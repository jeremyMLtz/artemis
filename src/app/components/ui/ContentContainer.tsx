import React, { ReactNode } from "react";

const ContentContainer = ({ children }: { children: ReactNode }) => (
  <main className='contentContainer'>{children}</main>
);

export default ContentContainer;
