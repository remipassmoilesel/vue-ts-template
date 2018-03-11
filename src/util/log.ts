export interface ILogger {
  namespace: string;

  info (msg: any)

  warn (msg: any)

  error (msg: any)
}

export class Logger implements ILogger {
  public namespace: string;

  constructor(namespace: string) {
    this.namespace = namespace;
  }

  info(msg: any) {
    console.info(`[${this.namespace}] ${msg}`)
  }

  warn(msg: any) {
    console.warn(msg)
  }

  error(msg: any) {
    console.error(msg)
  }

}
