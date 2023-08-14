export class IdNotExistsException extends Error {
  constructor(id: number) {
    super(`El ID de empleado '${id}' no existe.`);
    Object.setPrototypeOf(this, IdNotExistsException.prototype);
  }
}
