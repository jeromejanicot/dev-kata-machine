export default function linear_search(haystack: number[], needle: number): boolean {
  for (let n = 0; n < haystack.length; n++) {
    if (haystack[n] == needle) {
      return true;
    }
  }
  return false
}
