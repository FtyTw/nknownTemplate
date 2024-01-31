// used as middleware for any action, corresponding normalizer will be used by key at the moment of redux update
class Normalizers {
  updateDefaultState(data: any) {
    return data;
  }
}
export const nknownNormalizers = new Normalizers();
