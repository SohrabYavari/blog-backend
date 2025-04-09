import {
  createRefObject,
  convertTimestampToDate,
} from "../utils/utilFunctions";

describe("createRefObject", () => {
  it("should create a reference object using key1 and key2", () => {
    const input = [
      { name: "Alice", id: 1 },
      { name: "Bob", id: 2 },
    ];
    const result = createRefObject({
      array: input,
      key1: "name",
      key2: "id",
    });

    expect(result).toEqual({
      Alice: 1,
      Bob: 2,
    });
  });

  it("should handle empty array input", () => {
    const result = createRefObject({
      array: [],
      key1: "foo",
      key2: "bar",
    });

    expect(result).toEqual({});
  });

  it("should stringify key1 values correctly", () => {
    const input = [
      { id: 1, ref: 100 },
      { id: 2, ref: 200 },
    ];
    const result = createRefObject({
      array: input,
      key1: "id",
      key2: "ref",
    });

    expect(result).toEqual({
      "1": 100,
      "2": 200,
    });
  });
});

describe("convertTimestampToDate", () => {
  it("should convert string date to Date object", () => {
    const input = {
      created_at: "2023-01-01T00:00:00.000Z",
      name: "Alice",
    };

    const result = convertTimestampToDate(input);

    expect(result.created_at).toBeInstanceOf(Date);
    expect(result.created_at?.toISOString()).toBe("2023-01-01T00:00:00.000Z");
    expect(result.name).toBe("Alice");
  });

  it("should return other properties untouched if created_at is missing", () => {
    const input = { name: "Bob", age: 30 };
    const result = convertTimestampToDate(input);

    expect(result).toEqual({ name: "Bob", age: 30 });
  });

  it("should handle number timestamp correctly", () => {
    const timestamp = 1609459200000; // Jan 1, 2021
    const result = convertTimestampToDate({
      created_at: timestamp,
      event: "New Year",
    });
    expect(result.created_at).toBeInstanceOf(Date);
    expect(result.created_at?.getTime()).toBe(timestamp);
    expect(result.event).toBe("New Year");
  });
});
