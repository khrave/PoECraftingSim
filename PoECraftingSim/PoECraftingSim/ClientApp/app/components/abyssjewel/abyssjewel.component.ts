import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Mods as MurderousEyeMods } from '../../../Data/Mods/AbyssJewels/MurderousEye';
import { Mods as SearchingEyeMods } from '../../../Data/Mods/AbyssJewels/SearchingEye';
import { Mods as HypnoticEyeMods } from '../../../Data/Mods/AbyssJewels/HypnoticEye';
import { Renderer } from '@angular/core/src/render/api';
import { CurrencyOrb } from '../../../Data/CurrencyOrbs';
import * as $ from 'jquery';
import { Mod } from '../../../Data/Mods/Mod';
import { AffixTypes, Groups, Categories } from '../../../Data/Types/Types';

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
    public searchingEyeMods = new SearchingEyeMods();
    public hypnoticEyeMods = new HypnoticEyeMods();
    public availableMods = new MurderousEyeMods().Modlist;
    public IsNormal = true;
    public IsMagic = false;
    public IsRare = false;
    public ItemMods: Array<Mod> = Array<Mod>();
    get jewelImageURL(): string {
        return require("../../../assets/Images/Jewels/" + this.jewelBase + ".png");
    }

    onUseOrb(orbType: string) {
        switch (orbType) {
            case CurrencyOrb.Transmutation: {
                if (this.IsNormal) {
                    this.IsNormal = false;
                    this.IsMagic = true;

                    this.AddMod();
                    if (this.RandomIntInInterval(1, 2) == 2) {
                        this.AddMod();
                    }
                }
                
                break;
            }
            case CurrencyOrb.Augmentation: {
                console.log('my mod count is: ');
                console.log(this.ItemMods.length);
                if (this.ItemMods.length < 2 && this.IsMagic) {
                    this.AddMod();
                }
                break;
            }
            case CurrencyOrb.Alteration: {
                if (this.IsMagic) {
                    this.ResetItem();

                    this.IsNormal = false;
                    this.IsMagic = true;

                    this.AddMod();
                    if (this.RandomIntInInterval(1, 2) == 2) {
                        this.AddMod();
                    }
                }

                break;
            }
            case CurrencyOrb.Regal: {
                if (this.IsMagic) {
                    this.IsNormal = false;
                    this.IsMagic = false;
                    this.IsRare = true;   
                    
                    this.AddMod();
                }

                break;
            }
            case CurrencyOrb.Alchemy: {
                if (this.IsNormal) {
                    this.IsRare = true;
                    this.IsNormal = false;
                    this.IsMagic = false;

                    var num = this.RandomIntInInterval(3, 4);

                    for (var i = 0; i < num; i++) {
                        this.AddMod();
                    }                    
                }
                
                break;
            }
            case CurrencyOrb.Chaos: {
                if (this.IsRare) {
                    this.ResetItem();
                    this.IsRare = true;
                    this.IsNormal = false;
                    this.IsMagic = false;

                    var num = this.RandomIntInInterval(3, 4);

                    for (var i = 0; i < num; i++) {
                        this.AddMod();
                    }
                }

                break;
            }
            case CurrencyOrb.Scouring: {
                this.ResetItem();
                break;
            }
            case CurrencyOrb.Annulment: {
                var numToRemove = this.RandomIntInInterval(0, this.ItemMods.length - 1);

                
                this.ItemMods.splice(numToRemove, 1);

                $('.poe-itemdesc-augmenttext').remove();

                for (var i = 0; i < this.ItemMods.length; i++) {
                    mod = this.ItemMods[i];
                    $('#mods').after('<div class="poe-itemdesc-augmenttext">' + mod.Output(mod.LowerValue, mod.UpperValue) + '</div>');
                }

                this.RefreshName();

                break;
            }
            case CurrencyOrb.Divine: {
                $('.poe-itemdesc-augmenttext').remove();

                var mod;
                for (var i = 0; i < this.ItemMods.length; i++) {
                    mod = this.ItemMods[i];
                    mod = this.DivineMod(mod);
                    $('#mods').after('<div class="poe-itemdesc-augmenttext">' + mod.Output(mod.LowerValue, mod.UpperValue) + '</div>');
                }

                break;
            }
            case CurrencyOrb.Exalted: {
                if (this.ItemMods.length < 4 && this.IsRare) {
                    this.AddMod();
                }
                break;
            }
            case CurrencyOrb.Blessed: {
                alert("Blessed orbs don't do shit for jewels, stop clicking this.");

                break;
            }
            case CurrencyOrb.Vaal: {
                this.GetMod();
            }
        }        
    }

    public DivineMod(mod: Mod) {
        if (mod.Name == "Energising" || mod.Name == "Inspirational" || mod.Name == "Resonating" || mod.Name == "Of Vivaciousness") {
            mod.LowerValue = this.RandomDecimalInInterval(mod.LowerRange[0], mod.LowerRange[1]);
            mod.UpperValue = this.RandomDecimalInInterval(mod.UpperRange[0], mod.UpperRange[1]);
        }
        else {
            mod.LowerValue = this.RandomIntInInterval(mod.LowerRange[0], mod.LowerRange[1]).toString();
            mod.UpperValue = this.RandomIntInInterval(mod.UpperRange[0], mod.UpperRange[1]).toString();
        }

        return mod;
    }

    public AddMod() {
        var mod = this.GetMod();

        if (mod == null) {
            return;
        }

        this.ItemMods.push(mod);
        $('#mods').after('<div class="poe-itemdesc-augmenttext">' + mod.Output(mod.LowerValue, mod.UpperValue) + '</div>');

        this.RefreshName();                
    }

    public GetMod() {
        if (this.jewelBase == "MurderousEye") {
            this.availableMods = this.murderousEyeMods.Modlist;
        }
        else if (this.jewelBase == "SearchingEye") {
            this.availableMods = this.searchingEyeMods.Modlist;
        }
        else if (this.jewelBase == "HypnoticEye") {
            this.availableMods = this.hypnoticEyeMods.Modlist;
        }
        var canAssignPrefixes = this.CanAssignPrefixes();
        var canAssignSuffixes = this.CanAssignSuffixes();

        //Filter based on affix count
        if (canAssignPrefixes && !canAssignSuffixes) {
            this.availableMods = this.availableMods.filter(m => m.Type == AffixTypes.Prefix);
        }
        else if (!canAssignPrefixes && canAssignSuffixes) {
            this.availableMods = this.availableMods.filter(m => m.Type == AffixTypes.Suffix);
        }

        //Filter based on Group (If we have dagger, we don't want claw)
        for (var i = 0; i < this.ItemMods.length; i++) {
            if (this.ItemMods[i].Group != Groups.None) {
                this.availableMods = this.availableMods.filter(m => m.Group == this.ItemMods[i].Group || m.Group == Groups.None);
            }
        }

        //Filter based on Category (we can't have 2 +max life rolls)
        for (var i = 0; i < this.ItemMods.length; i++) {
            if (this.ItemMods[i].Category != Categories.None) {
                this.availableMods = this.availableMods.filter(m => m.Category != this.ItemMods[i].Category || m.Category == Categories.None);
            }
        }

        //Remove Current mods from availability
        for (var i = 0; i < this.ItemMods.length; i++) {
            this.availableMods = this.availableMods.filter(m => m.Name != this.ItemMods[i].Name);
        }

        var sum = 0;
        for (var i = 0; i < this.availableMods.length; i++) {
            sum += this.availableMods[i].Weight;
        }

        var randomNum = this.RandomIntInInterval(0, sum);

        var modToUse = null;
        for (var i = 0; i < this.availableMods.length; i++) {
            randomNum = randomNum - this.availableMods[i].Weight;
            if (randomNum < 0) {
                modToUse = this.availableMods[i];
                break;
            }
        }

        if (modToUse != null) {
            modToUse = this.DivineMod(modToUse);
        }

        
        return modToUse;
    }    

    public RefreshName() {
        this.jewelName = this.jewelType;
        if (this.IsMagic && this.ItemMods.length > 0) {
            for (var i = 0; i < this.ItemMods.length; i++) {
                if (this.ItemMods[i].Type == AffixTypes.Prefix) {
                    this.jewelName = this.ItemMods[i].Name + ' ' + this.jewelName;
                }
                else if (this.ItemMods[i].Type == AffixTypes.Suffix) {
                    this.jewelName = this.jewelName + ' ' + this.ItemMods[i].Name;
                }
            }
        }
        else if (this.IsRare) {
            this.jewelName = "Rage Clasp or some shit";
        }
        else {
            this.jewelName = this.jewelType;
        }

    }

    public CanAssignPrefixes() {        
        var val = this.ItemMods.filter(m => m.Type == AffixTypes.Prefix).length;
        if ((this.IsMagic && val > 0) || (this.IsRare && val > 1)) {
            return false;
        }

        return true;
    }

    public CanAssignSuffixes() {
        var val = this.ItemMods.filter(m => m.Type == AffixTypes.Suffix).length;
        if ((this.IsMagic && val > 0) || (this.IsRare && val > 1)) {
            return false;
        }

        return true;
    }

    public RandomIntInInterval(min: number, max: number){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public RandomDecimalInInterval(min: number, max: number) {
        return (Math.random() * (max - min) + min).toFixed(1);
    }

    public GetItemStatus() {
        if (this.IsNormal) {
            return "poe-item-normal";
        }
        else if (this.IsMagic) {
            return "poe-item-magic";
        }
        else if (this.IsRare) {
            return "poe-item-rare";
        }
    }

    public ResetItem() {
        this.IsNormal = true;
        this.IsMagic = false;
        this.IsRare = false;
        this.jewelName = this.jewelType;
        this.ItemMods = Array<Mod>();
        if (this.jewelBase == "MurderousEye") {
            this.availableMods = this.murderousEyeMods.Modlist;
        }
        else if (this.jewelBase == "SearchingEye") {
            this.availableMods = this.searchingEyeMods.Modlist;
        }
        else if (this.jewelBase == "HypnoticEye") {
            this.availableMods = this.hypnoticEyeMods.Modlist;
        }
        $('.poe-itemdesc-augmenttext').remove();
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

}
