import { Component, EventEmitter, Output } from '@angular/core';
import * as CurrencyOrbs from '../../../Data/CurrencyOrbs';

@Component({
    selector: 'currencywindow',
    templateUrl: './currencywindow.component.html',
    styleUrls: ['../../../assets/CSS/PoECraftStyle.css']
})
export class CurrencyWindowComponent {
    public Orbs = CurrencyOrbs.CurrencyOrb;
    @Output() onUseOrb = new EventEmitter<string>();

    useOrb(orbType: CurrencyOrbs.CurrencyOrb) {
        this.onUseOrb.emit(orbType.valueOf());
    }    
}
