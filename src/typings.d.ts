/* SystemJS module definition */
declare var module: {
  id: string;
};

declare var require: any;

/* Allows direct import of json files */
declare module "*.json" {
    const value: any;
    export default value;
}
