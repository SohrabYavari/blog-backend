export type CreateRefTypes = {
  array: Record<string, any>[];
  key1: string;
  key2: string;
};

export type Input = {
  created_at?: string | number | Date;
  [key: string]: any;
};

export type Output = {
  created_at?: Date;
  [key: string]: any;
};
