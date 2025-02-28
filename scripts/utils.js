export function wordCount(counted) {
return counted.match(/\b\w+\b/g).length;
}