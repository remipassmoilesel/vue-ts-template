export interface ILogger {
  namespace: string;

  info (msg: any);

  warn (msg: any);

  error (msg: any);
}

export class Logger implements ILogger {
  public namespace: string;

  constructor(namespace: string) {
    this.namespace = namespace;
  }

  public info(msg: any) {
    console.info(`[${this.namespace}] ${msg}`);
  }

  public warn(msg: any) {
    console.warn(msg);
  }

  public error(msg: any) {
    console.error(msg);
  }

}
