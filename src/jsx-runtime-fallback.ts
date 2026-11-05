import * as JsxRuntime from "react/jsx-runtime";
import * as React from "react";

// Robust JSX runtime fallback that guarantees jsxDEV, jsx, jsxs and Fragment
// are always valid functions, preventing "Uncaught TypeError: _jsxDEV is not a function"
export const Fragment = JsxRuntime.Fragment || React.Fragment;

export const jsx = (JsxRuntime as any).jsx || React.createElement;
export const jsxs = (JsxRuntime as any).jsxs || React.createElement;

export const jsxDEV =
  (JsxRuntime as any).jsxDEV ||
  (JsxRuntime as any).jsx ||
  React.createElement;

export default {
  Fragment,
  jsx,
  jsxs,
  jsxDEV,
};
