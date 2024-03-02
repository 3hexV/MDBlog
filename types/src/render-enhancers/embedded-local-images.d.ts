/// <reference types="cheerio" />
import { Notebook } from '../notebook';
export default function enhance($: CheerioStatic, notebook: Notebook, resolveFilePath: (path: string, useRelativeFilePath: boolean) => string): Promise<void>;
