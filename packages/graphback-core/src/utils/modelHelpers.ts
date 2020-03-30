import { GraphQLOutputType, isWrappingType, isListType, GraphQLField, getNamedType, isObjectType, GraphQLObjectType } from 'graphql';
import { parseMarker } from 'graphql-metadata';

export function hasListType(outputType: GraphQLOutputType): boolean {
    if (isListType(outputType)) {
        return true;
    } else if (isWrappingType(outputType)) {
        return hasListType(outputType.ofType)
    }

    return false;
}

export function getObjectFields(fields: GraphQLField<any, any>[]) {
    return Object.values(fields).filter((f: GraphQLField<any, any>) => {
        const baseType = getNamedType(f.type);

        return isObjectType(baseType);
    });
}