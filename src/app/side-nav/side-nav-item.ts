import { Icon } from "./icon";

export type Active = "active" | "";

export class SideNavItem {
    
    constructor(public displayName: string,
                public link: string,
                public title: string,
                public icon: Icon,
                public active?: Active) {
    }
    
    setActive(active: Active) {
        this.active = active;
    }
}
