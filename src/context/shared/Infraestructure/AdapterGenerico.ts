export class AdapterGenerico {
    public static formatCurrentMoney(amount: number) {
        return `$ ${amount.toLocaleString('es-PE', { minimumFractionDigits: 0 })}`;
    }

    public static formatDate(input: string | Date, format: "DD-MM-YYYY" | "DD de MM del YYYY" | "MM del YYYY"): string {
        const date = new Date(input);
        if (isNaN(date.getTime())) return "";

        const day = date.getDate().toString().padStart(2, "0");
        const monthIndex = date.getMonth();
        const monthNumber = (monthIndex + 1).toString().padStart(2, "0");
        const year = date.getFullYear();

        const monthNames = [
            "enero", "febrero", "marzo", "abril", "mayo", "junio",
            "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ];

        const payload: Record<string, string> = {
            "DD-MM-YYYY": `${day}-${monthNumber}-${year}`,
            "DD de MM del YYYY": `${day} de ${monthNames[monthIndex]} del ${year}`,
            "MM del YYYY": `${monthNames[monthIndex]} del ${year}`
        }

        return payload[format];
    }

    public static buildUrlWithParams(params?: Record<string, any>): string {
        if (!params) return '';

        const query = Object.entries(params)
            .flatMap(([key, value]) => {
                if (!value) return '';
                if (Array.isArray(value)) {
                    return value.map(v => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`);
                }
                return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
            })
            .join("&");

        return query || '';
    }

    public static scrollToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
}