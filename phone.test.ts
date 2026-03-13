import { beforeEach, describe, expect, test } from "vitest";
import { atlagAr, nevLista, osszAr, Phone } from "./phone.js";

let lista: Phone[] = [];
beforeEach(() => {
    lista = [
        new Phone("Apple", 799.99),
        new Phone ("Apple", 699.99),
        new Phone("Samsung", 259.99)
    ];
});



describe('osszAr()', () => {
    test('néhány adattal helyesen számol',() => {
        expect(osszAr(lista)).toBe(1759.97);
        expect(osszAr(lista)).to;
    });
    test("üres listával helyes", () => {
        expect(osszAr([])).toBe(0);
    });
});

describe('nevLista()', () => {
    test('Néhány elemmel teszteljük', () => {
    expect(nevLista(lista)).toBe('Apple, Apple, Samsung')
    })
});

describe('atlagAr()', () => {
    test('üres listával', () => {
        expect(() => atlagAr([])).toThrow();
    })
    test("Néhány adattal", () => {
        expect(() => atlagAr(lista)).not.toThrow();
    })
});

