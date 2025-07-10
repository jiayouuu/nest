export class R<T> {
  constructor(
    public data?: T,
    public code: number = 200,
    public message: string = 'success',
  ) {}
  static success<T>(data?: T): R<T> {
    return new R(data);
  }
  static error(message: string, code: number = 500): R<undefined> {
    return new R(undefined, code, message);
  }
  static badRequest(message: string): R<undefined> {
    return new R(undefined, 400, message);
  }
  static unauthorized(message: string): R<undefined> {
    return new R(undefined, 401, message);
  }
  static forbidden(message: string): R<undefined> {
    return new R(undefined, 403, message);
  }
  static notFound(message: string): R<undefined> {
    return new R(undefined, 404, message);
  }
}
