export interface EntityStateModel<T> {
  loading: boolean;
  error?: any;
  data: T;
}
