import { convertCurrency } from "animesh-currency-converter";

convertCurrency("USD", "INR", 5).then(res=> console.log(res))