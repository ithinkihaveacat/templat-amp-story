import { React } from "./jsx";

const CONFIG = { quality: 0.9 };

export const AmpImgInit = (config?: { base?: string; quality?: number }) => {
  return (args: { src: string }) => {
    return <amp-img src={args.src} />;
  };
};

export default (args: { src: string }) => {
  return AmpImgInit(CONFIG)(args);
};
