import { Mat } from './Mat.d';

export class Net {
  forward(inputName?: string): Mat;
  forwardAsync(inputName?: string): Promise<Mat>;
  setInput(blob: Mat, inputName?: string): void;
  setInputAsync(blob: Mat, inputName?: string): Promise<void>;
  getOutputsNames(): string[];
  getOutputsNamesAsync(): Promise<string[]>;
}
