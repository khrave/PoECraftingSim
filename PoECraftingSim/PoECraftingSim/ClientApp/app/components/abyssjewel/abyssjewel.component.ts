import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Mods as MurderousEyeMods } from '../../../Data/Mods/AbyssJewels/MurderousEye';
import { Renderer } from '@angular/core/src/render/api';

@Component({
    selector: 'abyssjewel',
    templateUrl: './abyssjewel.component.html',
    styleUrls: ['../../../assets/CSS/PoECraftStyle.css'],
    encapsulation: ViewEncapsulation.None
})
export class AbyssJewelComponent {

    private renderer: Renderer;
    @ViewChild('mods') modsDiv: ElementRef;
    public jewelBase = "MurderousEye";
    public jewelType = "Murderous Eye"
    public murderousEyeMods = new MurderousEyeMods();

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

    onUseOrb(orbType: string) {
        this.modsDiv.nativeElement.insertAdjacentHTML('afterend', '<div class="poe-itemdesc-augmenttext">' + this.murderousEyeMods.Modlist[0].Output(26, 0) + '</div>');
    }
}
