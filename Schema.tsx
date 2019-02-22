import { React } from "./jsx";

export default (metadata: { [k: string]: string }) => {
  delete metadata.children;
  return (
    <script
      type="application/ld+json"
      dangerouslysetinnerhtml={{ __html: JSON.stringify(metadata) }}
    />
  );
};
