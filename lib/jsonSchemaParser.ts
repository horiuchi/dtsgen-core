import * as Debug from 'debug';

const debug = Debug('dtsgen');

export class JsonSchemaParser {
    private typeCache = new Map<string, TypeDefinition>();
}
