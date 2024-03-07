'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import rtlPlugin from "stylis-plugin-rtl";
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {

  const [styledComponentsStyleSheet, seet] = useState(() => {
    return new ServerStyleSheet();
  });

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return styles
  });

  if (typeof window !== 'undefined') return children;

  return (
    <StyleSheetManager
      sheet={styledComponentsStyleSheet.instance}
      stylisPlugins={[rtlPlugin]}
    >
      {children}
    </StyleSheetManager>
  )
}