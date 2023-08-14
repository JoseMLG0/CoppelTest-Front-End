export class DeliveriesIsLessThanZeroException extends Error {
    constructor(deliveries: number) {
      super(`Las entregas realizadas '${deliveries}' no pueden ser menores a 0.`);
      Object.setPrototypeOf(this, DeliveriesIsLessThanZeroException.prototype);
    }
  }