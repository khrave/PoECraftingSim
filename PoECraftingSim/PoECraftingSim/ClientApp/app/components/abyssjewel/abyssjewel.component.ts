import { Component } from '@angular/core';

@Component({
    selector: 'abyssjewel',
    templateUrl: './abyssjewel.component.html',
    styleUrls: ['./abyssjewel.component.css']
})
export class AbyssJewelComponent {
    public jewelBase = "MurderousEye";
    public jewelType = "Murderous Eye"

    get jewelImageURL(): string {
        return require("../../../assets/Images/Jewels/" + this.jewelBase + ".png");
    }

    public selectGhastlyEye() {
        this.jewelBase = "GhastlyEye";
        this.jewelType = "Ghastly Eye";
    }

    public selectHypnoticEye() {
        this.jewelBase = "HypnoticEye";
        this.jewelType = "Hypnotic Eye";
    }

    public selectMurderousEye() {
        this.jewelBase = "MurderousEye";
        this.jewelType = "Murderous Eye";
    }

    public selectSearchingEye() {
        this.jewelBase = "SearchingEye";
        this.jewelType = "Searching Eye";
    }
}
