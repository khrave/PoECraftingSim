import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'currencywindow',
    templateUrl: './currencywindow.component.html',
    styleUrls: ['../../../assets/CSS/PoECraftStyle.css']
})
export class CurrencyWindowComponent {
    @Output() onUseOrb = new EventEmitter<string>();

    useOrb(orbType: string) {
        this.onUseOrb.emit(orbType);
    }    
}
