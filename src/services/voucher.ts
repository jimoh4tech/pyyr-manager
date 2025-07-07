import axios from "axios";

export const baseUrl = import.meta.env.VITE_BASE_URL;

const checkVoucher = async ({
  web_redemption,
  brandid,
}: {
  web_redemption?: string;
  brandid: string;
}) => {
  const res = await axios.post(
    `${baseUrl}`,
    {
      web_redemption,
      brandid,
    },
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return res.data;
};

const processVoucher = async ({
  web_redemption_voucher,
  brandid,
  location,
}: {
  web_redemption_voucher: string;
  brandid: string;
  location: string;
}) => {
  const res = await axios.post(
    `${baseUrl}`,
    {
      web_redemption_voucher,
      brandid,
      location,
    },
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return res.data;
};

const getVoucherHistory = async ({
  list_history,
  brand_location,
}: {
  list_history: string;
  brand_location?: string;
}) => {
  const res = await axios.post(
    `${baseUrl}`,
    {
      list_history,
      brand_location,
    },
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return res.data;
};

export default {
  checkVoucher,
  processVoucher,
  getVoucherHistory,
};
