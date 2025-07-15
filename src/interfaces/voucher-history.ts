export interface IVoucherHistory {
  amount: string;
  customer_name: string;
  datetime: string;
  email: string;
  voucher_code: string;
  location: string;
}

export interface IVoucherValid {
  amount: string;
  customer_name: string;
  type?: string;
  voucher_code: string;
  datetime: string;
  email: string;
}
