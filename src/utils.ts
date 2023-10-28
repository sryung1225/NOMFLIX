export function makeImagePath(id: string, format?: string) {
  if (!id) {
    return "https://dummyimage.com/500x500/eee/000";
  }
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
}
