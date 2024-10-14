"use client";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useRouter } from "next/navigation";
import * as React from "react";
import { Toaster } from "sonner";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <ProvidersChild>{children}</ProvidersChild>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

const ProvidersChild = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <>
      <Toaster theme={theme === "dark" ? "dark" : "light"} />
      {children}
    </>
  );
};
