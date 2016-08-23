// Type definitions for gulp-sourcemaps v2.0.0-alpha
// Project: https://github.com/floridoo/gulp-sourcemaps
// Original Definitions by: Asana <https://asana.com>

import * as File from 'vinyl';

export interface InitOptions {
  loadMaps?: boolean;
  identityMap?: boolean;
  debug?: boolean;
}

export interface WriteMapper {
  (file: string): string;
}

export interface WriteFileMapper {
  (file: File): string;
}

export interface WriteOptions {
  addComment?: boolean;
  includeContent?: boolean;
  sourceRoot?: string | WriteMapper;
  destPath?: string;
  sourceMappingURLPrefix?: string | WriteMapper;
  sourceMappingURL?: WriteFileMapper;
  mapFile?: WriteMapper;
  mapSources?: WriteMapper;
  debug?: boolean;
  charset?: string;
}

export function init(opts?: InitOptions): NodeJS.ReadWriteStream;
export function write(path?: string, opts?: WriteOptions): NodeJS.ReadWriteStream;
export function write(opts?: WriteOptions): NodeJS.ReadWriteStream;

