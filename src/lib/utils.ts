type ClassValue = string | number | false | null | undefined;

export function cn(...inputs: ClassValue[]) {
  return inputs.filter((value): value is string | number => Boolean(value)).join(" ");
}
