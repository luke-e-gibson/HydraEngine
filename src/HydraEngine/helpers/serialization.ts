function replacer(_key: string, value: any) {
  if(value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries()), // or with spread: value: [...value]
    };
  } else {
    return value;
  }
}

function reviver(_key: string, value: any) {
  if(typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
}

export function serialize(obj: Object, space: number = 0): string {
  return JSON.stringify(obj, replacer, space);
}

export function deserialize<T>(json: string): T {
  return JSON.parse(json, reviver) as T;
}