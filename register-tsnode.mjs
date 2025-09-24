// --experimental-loader 경고 발생 시 아래 파일을 추가하고
// --loader ts-node/esm 대신 공식 register() 방식 사용
import { register } from 'node:module';
import { pathToFileURL } from 'node:url';
register('ts-node/esm', pathToFileURL('./'));
