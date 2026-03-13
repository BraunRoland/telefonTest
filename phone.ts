export class Phone {
    constructor(
        public readonly brand: string,
        public readonly price: number,
    ) {}
}

export function osszAr(phones: Phone[]): number {
    let osszeg = 0;
    for (const p of phones)
    {
        osszeg += p.price;
    }
    return osszeg;
}

export function nevLista(phones: Phone[]): string{
   return phones.map(p => p.brand).join(', ');
}