'use client';

import React from 'react';
import StyledComponentsRegistry from '@/lib/registry';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './GlobalStyles';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
