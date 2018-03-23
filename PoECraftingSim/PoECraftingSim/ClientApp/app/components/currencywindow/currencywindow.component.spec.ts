/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { assert } from 'chai';
import { CurrencyWindowComponent } from './currencywindow.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

let fixture: ComponentFixture<CurrencyWindowComponent>;

describe('Currency Window Component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [CurrencyWindowComponent] });
        fixture = TestBed.createComponent(CurrencyWindowComponent);
        fixture.detectChanges();
    });
});
