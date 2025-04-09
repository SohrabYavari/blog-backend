import { CreateRefTypes, Input, Output } from "../types/utilTypes.ts";

export function createRefObject({
  array,
  key1,
  key2,
}: CreateRefTypes): Record<string, string | number> {
  const referenceObject: Record<string, string | number> = {};

  array.forEach((obj) => {
    const key = String(obj[key1]);
    referenceObject[key] = obj[key2];
  });

  return referenceObject;
}

export const convertTimestampToDate = ({
  created_at,
  ...otherProperties
}: Input): Output => {
  if (!created_at) return { ...otherProperties };
  return { created_at: new Date(created_at), ...otherProperties };
};
