/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { assert } from 'chai';
import { AbyssJewelComponent } from './abyssjewel.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

let fixture: ComponentFixture<AbyssJewelComponent>;

describe('Counter component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [AbyssJewelComponent] });
        fixture = TestBed.createComponent(AbyssJewelComponent);
        fixture.detectChanges();
    });    

    it('should display the ghastly eye jewel when ghastly eye jewel is clicked', async(() => {
        const countElement = fixture.nativeElement.querySelector('strong');
        expect(countElement.textContent).toEqual('0');

        const incrementButton = fixture.nativeElement.querySelector('button');
        incrementButton.click();
        fixture.detectChanges();
        expect(countElement.textContent).toEqual('1');
    }));
});
