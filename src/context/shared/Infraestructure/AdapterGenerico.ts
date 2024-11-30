export class AdapterGenerico {
    public static formatCurrentMoney(amount: number) {
            return `S/ ${amount.toLocaleString('es-PE', { minimumFractionDigits: 0 })}`;
    }
}