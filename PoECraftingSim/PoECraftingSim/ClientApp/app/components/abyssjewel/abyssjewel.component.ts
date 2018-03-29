import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Mods as MurderousEyeMods } from '../../../Data/Mods/AbyssJewels/MurderousEye';
import { Renderer } from '@angular/core/src/render/api';
import { CurrencyOrb } from '../../../Data/CurrencyOrbs';
import * as $ from 'jquery';

@Component({
    selector: 'abyssjewel',
    templateUrl: './abyssjewel.component.html',
    styleUrls: ['../../../assets/CSS/PoECraftStyle.css'],
    encapsulation: ViewEncapsulation.None
})
export class AbyssJewelComponent {

    private renderer: Renderer;
    
    public jewelBase = "MurderousEye";
    public jewelType = "Murderous Eye"
    public jewelName = "Murderous Eye";
    public murderousEyeMods = new MurderousEyeMods();    

    get jewelImageURL(): string {
        return require("../../../assets/Images/Jewels/" + this.jewelBase + ".png");
    }

    public selectGhastlyEye() {
        this.jewelBase = "GhastlyEye";
        this.jewelType = "Ghastly Eye";
        this.ResetItem();
    }

    public selectHypnoticEye() {
        this.jewelBase = "HypnoticEye";
        this.jewelType = "Hypnotic Eye";
        this.ResetItem();
    }

    public selectMurderousEye() {
        this.jewelBase = "MurderousEye";
        this.jewelType = "Murderous Eye";
        this.ResetItem();
    }

    public selectSearchingEye() {
        this.jewelBase = "SearchingEye";
        this.jewelType = "Searching Eye";
        this.ResetItem();
    }

    onUseOrb(orbType: string) {
        switch (orbType) {
            case CurrencyOrb.Transmutation: {
                if ($('.poe-itemdesc-augmenttext').length <= 0) {
                    $('#itemHeader').removeClass('poe-item-normal');
                    $('#itemHeader').removeClass('poe-item-rare');
                    $('#itemHeader').addClass('poe-item-magic');
                    var mod = this.murderousEyeMods.Modlist[0];
                    $('#mods').after('<div class="poe-itemdesc-augmenttext">' + mod.Output(26, 0) + '</div>');
                    this.jewelName = mod.Name + ' ' + this.jewelType;
                }
                
                break;
            }
            case CurrencyOrb.Alchemy: {                
                if ($('.poe-itemdesc-augmenttext').length <= 3) {
                    $('#itemHeader').removeClass('poe-item-normal');
                    $('#itemHeader').removeClass('poe-item-magic');
                    $('#itemHeader').addClass('poe-item-rare');
                    $('#mods').after('<div class="poe-itemdesc-augmenttext">' + this.murderousEyeMods.Modlist[0].Output(26, 0) + '</div>');
                    $('#mods').after('<div class="poe-itemdesc-augmenttext">' + this.murderousEyeMods.Modlist[0].Output(26, 0) + '</div>');
                    $('#mods').after('<div class="poe-itemdesc-augmenttext">' + this.murderousEyeMods.Modlist[0].Output(26, 0) + '</div>');
                    this.jewelName = 'Rage Clasp or some shit';
                }
                
                break;
            }
            case CurrencyOrb.Augmentation: {
                if ($('.poe-itemdesc-augmenttext').length == 1) {
                    var mod = this.murderousEyeMods.Modlist[8];
                    $('#mods').after('<div class="poe-itemdesc-augmenttext">' + mod.Output(10, 18) + '</div>');
                    this.jewelName += ' ' + mod.Name;
                }
                break;
            }
            case CurrencyOrb.Scouring: {
                this.ResetItem();
                break;
            }
        }        
    }

    public ResetItem() {
        $('#itemHeader').addClass('poe-item-normal');
        $('#itemHeader').removeClass('poe-item-magic');
        $('#itemHeader').removeClass('poe-item-rare');
        this.jewelName = this.jewelType;
        $('.poe-itemdesc-augmenttext').remove();
    }



}
