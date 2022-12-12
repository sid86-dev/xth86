export interface ICodeSRC {
  "script.js": CodeSRC;
  "style.css": CodeSRC;
  "index.html": CodeSRC;
}

type CodeSRC = {
  name: string;
  language: string;
  value: string;
};
