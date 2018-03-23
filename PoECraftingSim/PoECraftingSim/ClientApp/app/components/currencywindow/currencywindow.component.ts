import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'currencywindow',
    templateUrl: './currencywindow.component.html',
    styleUrls: ['../../../assets/CSS/PoECraftStyle.css']
})
export class CurrencyWindowComponent {
    @Output() onUseChaos = new EventEmitter();

    useChaos() {
        this.onUseChaos.emit();
    }
}
