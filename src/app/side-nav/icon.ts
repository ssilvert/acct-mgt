export type Vendor = "fa" | "pficon";

export class Icon {
    constructor(public vendor: Vendor, public name: string) {}
    
    getClasses(): string {
        return `${this.vendor} ${this.vendor}-${this.name}`; 
    }
}


