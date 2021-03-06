// Type definitions for gulp-sourcemaps v2.0.0-alpha
// Project: https://github.com/floridoo/gulp-sourcemaps
// Original Definitions by: Asana <https://asana.com>

export interface InitOptions {
  loadMaps?: boolean;
  debug?: boolean;
}

export interface WriteMapper {
  (filePath: string): string;
}

export interface WriteOptions {
  addComment?: boolean;
  includeContent?: boolean;
  sourceRoot?: string | WriteMapper;
  sourceMappingURLPrefix?: string | WriteMapper;
}

export function init(opts?: InitOptions): NodeJS.ReadWriteStream;
export function write(path?: string, opts?: WriteOptions): NodeJS.ReadWriteStream;
export function write(opts?: WriteOptions): NodeJS.ReadWriteStream;
