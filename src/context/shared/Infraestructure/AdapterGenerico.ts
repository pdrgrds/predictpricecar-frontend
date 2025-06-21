export class AdapterGenerico {
    public static formatCurrentMoney(amount: number) {
            return `$ ${amount.toLocaleString('es-PE', { minimumFractionDigits: 0 })}`;
    }
}